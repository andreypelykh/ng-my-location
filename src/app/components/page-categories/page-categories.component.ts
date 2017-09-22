import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrls: ['./page-categories.component.css'],
  providers: [CategoryService]
})
export class PageCategoriesComponent implements OnInit {
	selectedCategory: Category = null;
	categories: Observable<Category[]>;
  isEditing: boolean = false;
	isAdding: boolean = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  onSelected(category: Category) {
  	this.selectedCategory = category;
  }

  onAddingSaved(name: string) {
    console.log(name);
    this.categoryService.addCategory(new Category(name));
  }

  onEditingSaved(name: string) {
    this.categoryService.changeCategory(this.selectedCategory, { name });
  }

  onAddCategory() {
    this.isEditing = false;
    this.isAdding = !this.isAdding;
  }

  onEditCategory() {
    if (this.selectedCategory) {
      this.isAdding = false;
      this.isEditing = !this.isEditing;
    }
  }

  removeCategory() {
    this.selectedCategory && this.categoryService.removeCategory(this.selectedCategory);
  }
}
