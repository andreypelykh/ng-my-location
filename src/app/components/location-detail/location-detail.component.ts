import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {
	lat: number;
	lng: number;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  ) { }

  ngOnInit() {
  	this.lat = +this.route.snapshot.paramMap.get('lat');
  	this.lng = +this.route.snapshot.paramMap.get('lng');
  }

  gotoLocations() {
    this.router.navigate(['/location']);
  }

}
