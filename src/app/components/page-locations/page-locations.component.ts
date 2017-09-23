import { Component, OnInit } from '@angular/core';
import { Location, LocationProperties } from '../../models/location.model';
import { LocationService } from '../../services/location.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-locations',
  templateUrl: './page-locations.component.html',
  styleUrls: ['./page-locations.component.css'],
  providers: [ LocationService ]
})
export class PageLocationsComponent implements OnInit {
	selectedLocation: Location = null;
	locations: Observable<Location[]>;
  isEditing: boolean = false;
	isAdding: boolean = false;


  constructor(private locationService: LocationService) { }

  ngOnInit() {
  	this.locations = this.locationService.getLocations();
  }

  onSelected(location: Location) {
    if (this.selectedLocation === location) {
      this.selectedLocation = null;
    }
    else {
  	  this.selectedLocation = location;
    }
  }

  onAddingSaved(properties: LocationProperties) {

    this.locationService.addLocation(new Location(
    	properties.name,
    	properties.address,
    	properties.coordinates,
    	properties.categoryId
    ));
  }

  onEditingSaved(properties: LocationProperties) {
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
