import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-locations-filter',
  templateUrl: './locations-filter.component.html',
  styleUrls: ['./locations-filter.component.css']
})
export class LocationsFilterComponent implements OnInit {
	@Input() categories: Category[];
	@Output() changed = new EventEmitter<any>();

	filterForm: FormGroup;

  constructor(private fb: FormBuilder) { 
  	this.createForm();
  }

  createForm() {
  	this.filterForm = this.fb.group({
  		alphabetically: [false],
  		categoryId: ['all']
  	});

  	this.filterForm.valueChanges.subscribe(
  		(changes) => this.formChanges(changes)
  	);
  }

  ngOnInit() {
  }

  formChanges(changes) {
  	this.changed.emit(changes);
  }

}
