import { UUID } from 'angular2-uuid';
import { Category } from './category.model';

export interface Position {
	lat: string;
	lng: string;
}

export class Location {
	id: string;

	constructor(
		public name: string,
		public address: string,
		public coordinates: Position,
		public categoryId: string
	) {
		this.id = UUID.UUID();
	}
}

export interface LocationProperties {
	name ?: string,
	address ?: string,
	coordinates ?: Position,
	categoryId ?: string
}