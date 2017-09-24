import { Component, OnInit } from '@angular/core';
import { Location, LocationProperties } from '../../models/location.model';
import { Category } from '../../models/category.model';
import { LocationService } from '../../services/location.service';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-locations',
  templateUrl: './page-locations.component.html',
  styleUrls: ['./page-locations.component.css'],
  providers: [ LocationService, CategoryService ]
})
export class PageLocationsComponent implements OnInit {
	selectedLocation: Location = null;
	locations: Observable<Location[]>;
  isEditing: boolean = false;
	isAdding: boolean = false;

  categories: Category[];

  constructor(private locationService: LocationService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.locations = this.locationService.getLocations();
  	this.categoryService.getCategories().subscribe((categories) => this.categories = categories);
  }

  onSelected(location: Location) {
    if (this.selectedLocation === location) {
      this.selectedLocation = null;
    }
    else {
  	  this.selectedLocation = location;
    }
  }

  onAddingSaved(properties: any) {

    this.locationService.addLocation(new Location(
      properties.name,
      properties.address,
      {
        lat: properties.lat,
        lng: properties.lng
      },
      properties.categoryId
    ));
  }

  onEditingSaved(properties: any) {
    this.locationService.changeLocation(this.selectedLocation, properties);
  }

  onAddCategory() {
    this.isEditing = false;
    this.isAdding = !this.isAdding;
  }

  onEditCategory() {
    if (this.selectedLocation) {
      this.isAdding = false;
      this.isEditing = !this.isEditing;
    }
  }

  removeCategory() {
    this.selectedLocation && this.locationService.removeLocation(this.selectedLocation);
  }

}
