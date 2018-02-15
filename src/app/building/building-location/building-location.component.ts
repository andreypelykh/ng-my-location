import { Component, OnInit } from '@angular/core';

export const LOCATION = [50.484783, 30.557383];

@Component({
  selector: 'app-building-location',
  templateUrl: './building-location.component.html',
  styleUrls: ['./building-location.component.css']
})
export class BuildingLocationComponent implements OnInit {
	state: string = 'info'; // loading | map | info	

	lat = LOCATION[0];
	lng = LOCATION[1];

  constructor() { }

  ngOnInit() {
  	// setTimeout(() => {

  	// }, 4000)
  }

}
