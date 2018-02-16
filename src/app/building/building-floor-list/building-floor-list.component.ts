import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-building-floor-list',
  templateUrl: './building-floor-list.component.html',
  styleUrls: ['./building-floor-list.component.css']
})
export class BuildingFloorListComponent implements OnInit {

  constructor(
  	public location: Location,
  ) { }

  ngOnInit() {
  }


}
