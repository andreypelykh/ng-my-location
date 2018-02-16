import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'
import * as Rx from 'rx-dom';

@Injectable()
export class GeolocationService {
	private source;

  constructor() {
  	this.source = Rx.DOM.geolocation.getCurrentPosition({
  	  enableHighAccuracy: true,
  	  timeout: 10000
  	});
  }

  getPosition(): Observable<any> {
  	return this.source;
  }

}
