import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Location, LocationProperties } from '../models/location.model';
import { BehaviorSubject, Observable } from 'rxjs';

export const LOCATIONS: Location[] = [
  new Location('Shop1', 'Bluhera street', {lat: '234875', lng: '34324'}, '464354253'),
  new Location('Library', 'Walker street', {lat: '234875', lng: '34324'}, '4354253')
];

@Injectable()
export class LocationService {
  private locations = new BehaviorSubject<Location[]>([]);
  private currentValue: Location[];
 
  public constructor(protected storage: AsyncLocalStorage) {
		this.storage.getItem('locations').subscribe((locations:Location[]) => {
	    locations && this.locations.next(locations);
		});

	  this.locations.subscribe(e => {
	    this.currentValue = e;
	  });
  }

  public getLocations(): Observable<Location[]> {
  	return this.locations.asObservable();
  }

  public addLocation(location: Location) {
    console.log('add location');

    const newArray = [
    	...this.currentValue,
    	location
    ];

    this.updateStore(newArray);
  }

  public removeLocation(location: Location) {

  	const pos = this.currentValue.indexOf(location);

  	const newArray = [
      ...this.currentValue.slice(0, pos),
      ...this.currentValue.slice(pos + 1),
    ];

    this.updateStore(newArray);
  }

  public changeLocation(location: Location, changes: any) {
    console.log('changes', changes);
    console.log('location', location);

    const changedLocation = Object.assign({}, location, {
      name: changes.name,
      coordinates: {
        lat: changes.lat,
        lng: changes.lng,
      },
      categoryId: changes.categoryId
    });

    const pos = this.currentValue.indexOf(location);

    const newArray = [
      ...this.currentValue.slice(0, pos),
      changedLocation,
      ...this.currentValue.slice(pos + 1),
    ];

    this.updateStore(newArray);
  }

  private updateStore(newValue) {
    this.locations.next(newValue);
    this.storage.setItem('locations', newValue).subscribe();
  }
 
}
