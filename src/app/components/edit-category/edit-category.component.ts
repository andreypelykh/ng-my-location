import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Category } from '../../models/category.model'

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnChanges {
	@Input() category: Category;
	@Output() save = new EventEmitter<string>();
	modelName: string;

  constructor() { }

  ngOnChanges() {
  	this.modelName = this.category ? this.category.name : '';
  }

  onSubmit() {
  	console.log(this.modelName);
  	this.save.emit(this.modelName);
  }

}
