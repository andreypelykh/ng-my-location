import { UUID } from 'angular2-uuid';
import { Coordinates } from './coordinates.model';
import { Category } from './category.model';

export class Location {
	id: string;

	constructor(
		public name: string,
		public address: string,
		public coordinates: Coordinates,
		public categoryId: string
	) {
		this.id = UUID.UUID();
	}
}
