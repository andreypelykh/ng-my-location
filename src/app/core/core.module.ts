import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { environment } from '../../environments/environment';
import { EVACUATION_DI_CONFIG } from '../app.config';

import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';

import { GeolocationService } from './geolocation.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncLocalStorageModule,
    AgmCoreModule.forRoot(EVACUATION_DI_CONFIG.googleMaps),
    AngularFireModule.initializeApp(EVACUATION_DI_CONFIG.firebase),
  ],
  exports: [
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncLocalStorageModule,
    AgmCoreModule,
    AngularFireModule
  ],
  declarations: [],
  providers: [
  	GeolocationService,
  ]
})
export class CoreModule { }
