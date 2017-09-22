import { UUID } from 'angular2-uuid';

export class Category {
	id: string;

	constructor(public name: string) {
		this.id = UUID.UUID();
	}
}
