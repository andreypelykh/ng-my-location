import { Component, OnInit } from '@angular/core';
import { Location, LocationProperties } from '../../models/location.model';
import { Category } from '../../models/category.model';
import { LocationService } from '../../services/location.service';
import { CategoryService } from '../../services/category.service';
import { LocationsFilterService, LocationsFilter } from '../../services/locations-filter/locations-filter.service';
import { Observable } from 'rxjs';
import {MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MainDialogComponent } from '../main-dialog/main-dialog.component';

@Component({
  selector: 'app-page-locations',
  templateUrl: './page-locations.component.html',
  styleUrls: ['./page-locations.component.css'],
  providers: [ LocationService, CategoryService, LocationsFilterService ]
})
export class PageLocationsComponent implements OnInit {
	selectedLocation: Location = null;
	locations: Observable<Location[]>;
  isEditing: boolean = false;
	isAdding: boolean = false;

  categories: Category[];

  filteredLocations$: Observable<Location[]>

  constructor(
    private locationService: LocationService,
    private categoryService: CategoryService,
    private filterService: LocationsFilterService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.locations = this.locationService.getLocations();
  	this.categoryService.getCategories().subscribe((categories) => this.categories = categories);
    this.filteredLocations$ = this.filterService.setSource(this.locations);
  }

  onSelected(location: Location) {
    if (this.selectedLocation === location) {
      this.selectedLocation = null;
    }
    else {
  	  this.selectedLocation = location;
    }

    window.navigator.vibrate(1000);
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

    this.openSnackBar('Location was saved.')
  }

  onEditingSaved(properties: any) {
    this.selectedLocation = this.locationService.changeLocation(this.selectedLocation, properties);
    this.openSnackBar('Location was saved.')
  }

  onAddLocation() {
    console.log('page-locations add');
    // this.isEditing = false;
    // this.isAdding = !this.isAdding;
    this.openDialog('Add location');
  }

  onEditLocation() {
    if (this.selectedLocation) {
      // this.isAdding = false;
      // this.isEditing = !this.isEditing;
      this.openDialog('Edit location', this.selectedLocation);
    }
  }

  removeLocation() {
    if (this.selectedLocation) {
      this.locationService.removeLocation(this.selectedLocation);

      this.openSnackBar('Location was removed.')
    }
  }

  filterChanged(filter: LocationsFilter) {
    this.filterService.changeFilter(filter);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 3000,
    });
  }

  openDialog(title: string, location: Location = null): void {
    let dialogRef = this.dialog.open(MainDialogComponent, {
      width: '250px',
      data: {
        title,
        location,
        categories: this.categories
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if (result === undefined) {
        return;
      }

      if (location) {
        this.onEditingSaved(result);
      }
      else {
        this.onAddingSaved(result);
      }
    });
  }

}
