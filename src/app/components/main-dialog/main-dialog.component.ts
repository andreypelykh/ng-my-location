import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-main-dialog',
  templateUrl: './main-dialog.component.html',
  styleUrls: ['./main-dialog.component.css']
})
export class MainDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MainDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCompleted($event) {
  	this.dialogRef.close($event);
  }

}
