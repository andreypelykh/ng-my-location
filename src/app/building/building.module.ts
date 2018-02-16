import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import { BuildingLocationComponent } from './building-location/building-location.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AgmCoreModule } from '@agm/core';
import { BuildingFloorListComponent } from './building-floor-list/building-floor-list.component';
import { BuildingFloorComponent } from './building-floor/building-floor.component';

@NgModule({
  imports: [
    CommonModule,
    BuildingRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    AgmCoreModule,
  ],
  declarations: [BuildingLocationComponent, BuildingFloorListComponent, BuildingFloorComponent]
})
export class BuildingModule { }
