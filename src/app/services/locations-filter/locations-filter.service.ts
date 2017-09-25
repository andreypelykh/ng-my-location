import { Injectable } from '@angular/core';
import { Location, LocationProperties } from '../../models/location.model';
import { BehaviorSubject, Observable } from 'rxjs';

export interface LocationsFilter {
	alphabetically: boolean; 
	categoryId: string;
}

export const DEFAULT_FILTER: LocationsFilter = {
	alphabetically: false,
	categoryId: 'all'
}

@Injectable()
export class LocationsFilterService {
	private filter$: BehaviorSubject<LocationsFilter>;
	private locations$: Observable<Location[]>;
	private filteredLocations$: Observable<Location[]>;

  constructor() {
  	this.filter$ = new BehaviorSubject(DEFAULT_FILTER);
  }

  public createFilterLocations(
            filter$: Observable<LocationsFilter>,
            locations$: Observable<Location[]>) {

    return locations$.combineLatest(
      filter$, (locations: Location[], filter: LocationsFilter) => {

        const sortFn = (a, b) => a.name.toLowerCase().charCodeAt(0) - b.name.toLowerCase().charCodeAt(0);
        const filterFn = (location: Location) => location.categoryId === filter.categoryId;

        const filteredLocations = filter.categoryId !== 'all' ? 
                                locations.filter(filterFn) :
                                locations;

        const sortedLocations = filter.alphabetically ? 
                                filteredLocations.slice().sort(sortFn) :
                                filteredLocations;

        return sortedLocations;
      });
  }

  changeFilter(filter: LocationsFilter) {
  	this.filter$.next(filter);
  }

  setSource(locations$: Observable<Location[]>): Observable<Location[]> {
  	this.locations$ = locations$;

  	this.filteredLocations$ = this.createFilterLocations(
  		this.filter$,
  		this.locations$
  	);

  	return this.filteredLocations$;
  }
}
