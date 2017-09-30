import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-main-dialog',
  templateUrl: './main-dialog.component.html',
  styleUrls: ['./main-dialog.component.css']
})
export class MainDialogComponent {

  constructor(
    public dialogRef: MdDialogRef<MainDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  onCompleted($event) {
  	this.dialogRef.close($event);
  }

}
