import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonToggleModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatGridListModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatDialogModule,
} from '@angular/material';

export const materialModules = [
  MatButtonToggleModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatGridListModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatDialogModule,
];

export const modulesList = [
	CommonModule,
	...materialModules
];

@NgModule({
  imports: modulesList,
  exports: modulesList,
  declarations: []
})
export class SharedModule { }
