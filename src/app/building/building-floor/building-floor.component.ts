import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';

import PinchZoom from 'pinch-zoom-js';

@Component({
  selector: 'app-building-floor',
  templateUrl: './building-floor.component.html',
  styleUrls: ['./building-floor.component.css']
})
export class BuildingFloorComponent implements OnInit, AfterViewInit  {
	@ViewChild('pinchZoom') zoomElement: ElementRef;

	pinchZoom: PinchZoom;

  constructor(
  	private renderer: Renderer2,
  	public location: Location,
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

  	this.initPinchZoom();
  }

  initPinchZoom() {

  	const el = this.zoomElement.nativeElement;

  	this.pinchZoom = new PinchZoom(el);
  }

}
