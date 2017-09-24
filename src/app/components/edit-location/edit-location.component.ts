import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Location, LocationProperties } from '../../models/location.model';
import { Category } from '../../models/category.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnChanges {
	@Input() location: Location;
	@Input() categories: Category[];
	@Output() save = new EventEmitter<any>();

  locationForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.locationForm = this.fb.group({
      name: ['', Validators.required ],
      address: ['', Validators.required ],
      lat: ['', Validators.required ],
      lng: ['', Validators.required ],
      categoryId: ['', Validators.required ],
    });
  }

  ngOnChanges() {
    let formValues;

    if (this.location) {

      formValues = {
        name:    this.location.name,
        address: this.location.address,
        lat: this.location.coordinates.lat,
        lng: this.location.coordinates.lng,
        categoryId: this.location.categoryId,
      };
      
    }
    else {
      const categoryId = this.categories ? this.categories[0].id : ''; 

  		formValues = {
        name: '',
        address: '',
        lat: '',
        lng: '',
        categoryId: categoryId,
      };

  	}

    this.locationForm.reset(formValues);

  }

  onSubmit() {

  	this.save.emit(this.locationForm.value);
    this.ngOnChanges();
  }

}
