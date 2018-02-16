import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { AgmCoreModule } from '@agm/core';

import { GeolocationService } from './geolocation.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncLocalStorageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCB58SCEDd-OEoW7pgR7bR5BxiHZkWY2Gc'
    }),
  ],
  exports: [
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncLocalStorageModule,
    AgmCoreModule
  ],
  declarations: [],
  providers: [
  	GeolocationService,
  ]
})
export class CoreModule { }
