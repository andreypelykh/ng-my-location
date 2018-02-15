import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import { BuildingLocationComponent } from './building-location/building-location.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    BuildingRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AgmCoreModule,
  ],
  declarations: [BuildingLocationComponent]
})
export class BuildingModule { }
