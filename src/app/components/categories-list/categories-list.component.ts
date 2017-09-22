import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
	@Input() categories: Observable<Category[]>;
	@Output() onSelected = new EventEmitter<Category>();
  @Input() selectedCategory: Category;
  
  constructor() { }

  ngOnInit() { }

  toggleSelect(category: Category) {
    this.onSelected.emit(category);
  }
}
