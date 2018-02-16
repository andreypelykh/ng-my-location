import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeolocationService } from '../../core/geolocation.service';



@Component({
  selector: 'app-building-location',
  templateUrl: './building-location.component.html',
  styleUrls: ['./building-location.component.css']
})
export class BuildingLocationComponent implements OnInit, OnDestroy {
	state: string = null; // loading | map | info	
  lat: number;
  lng: number;

  errorMessage: string;

  constructor(
    private geolocation: GeolocationService
  ) { }

  ngOnInit() {

    this.getPosition();
  }

  ngOnDestroy() {

  }

  getPosition() {
    this.state = 'loading';

    const subscription = this.geolocation.getPosition().subscribe(
      (pos) => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;

        this.state = 'map';
        console.log(pos.coords);
      },
      (err) => {
        var message = '';
        switch (err.code) {
          case err.PERMISSION_DENIED:
            message = 'Permission denied';
            break;
          case err.POSITION_UNAVAILABLE:
            message = 'Position unavailable';
            break;
          case err.PERMISSION_DENIED_TIMEOUT:
            message = 'Position timeout';
            break;
          default:
            message = ':(';
            break;
        }
        this.errorMessage = message;
        this.state = 'info';
      });

  }

  tryAgain() {
    this.getPosition();
  }

}
