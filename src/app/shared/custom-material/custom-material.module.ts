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

@NgModule({
  exports: [
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
  ],
  declarations: []
})
export class CustomMaterialModule { }
