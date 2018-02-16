import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material/custom-material.module';

export const modulesList = [
	CommonModule,
  CustomMaterialModule
];

@NgModule({
  imports: modulesList,
  exports: modulesList,
  declarations: []
})
export class SharedModule { }
