import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildingLocationComponent } from './building-location/building-location.component';

const routes: Routes = [
	{
	  path: '',
	  component: BuildingLocationComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingRoutingModule { }
