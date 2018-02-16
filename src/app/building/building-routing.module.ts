import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildingLocationComponent } from './building-location/building-location.component';
import { BuildingFloorListComponent } from './building-floor-list/building-floor-list.component';
import { BuildingFloorComponent } from './building-floor/building-floor.component';

const routes: Routes = [
	{
	  path: 'floor/:number',
	  component: BuildingFloorComponent
	},
	{
	  path: 'floor',
	  component: BuildingFloorListComponent
	},
	{
	  path: '',
	  component: BuildingLocationComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingRoutingModule { }
