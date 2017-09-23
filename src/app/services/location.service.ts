import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Location, LocationProperties } from '../models/location.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LocationService {
  private locations = new BehaviorSubject<Location[]>([]);
  private currentValue: Location[];
 
  public constructor(protected storage: AsyncLocalStorage) {
		this.storage.getItem('locations').subscribe((locations:Location[]) => {
	    this.locations.next(locations);
		});

	  this.locations.subscribe(e => {
	    this.currentValue = e;
	  });
  }

  public getLocations(): Observable<Location[]> {
  	return this.locations.asObservable();
  }

  public addLocation(location: Location) {

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

  public changeLocation(location: Location, locationChanges: LocationProperties) {
    const changedLocation = Object.assign({}, location, locationChanges);

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
