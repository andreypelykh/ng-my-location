import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '../../models/location.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
	@Input() locations: Observable<Location[]>;
	@Output() onSelected = new EventEmitter<Location>();
  @Input() selectedLocation: Location;
  
  constructor() { }

  ngOnInit() { }

  toggleSelect(location: Location) {
    this.onSelected.emit(location);
  }
}
