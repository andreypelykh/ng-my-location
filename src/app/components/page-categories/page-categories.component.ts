import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import {MdSnackBar, MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { MainDialogComponent } from '../main-dialog/main-dialog.component';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrls: ['./page-categories.component.css'],
  providers: [CategoryService]
})
export class PageCategoriesComponent implements OnInit {
	selectedCategory: Category = null;
	categories: Observable<Category[]>;

  constructor(
    private categoryService: CategoryService,
    public snackBar: MdSnackBar,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  onSelected(category: Category) {
    if (this.selectedCategory === category) {
      this.selectedCategory = null;
    }
    else {
  	  this.selectedCategory = category;
    }
    console.log(this.selectedCategory);
  }

  onAddingSaved(name: string) {
    this.categoryService.addCategory(new Category(name));

    this.openSnackBar('Category was added.');
  }

  onEditingSaved(name: string) {
    this.selectedCategory = this.categoryService.changeCategory(this.selectedCategory, { name });

    this.openSnackBar('Category was saved.');
  }

  onAddCategory() {
    this.openDialog('Add category');
  }

  onEditCategory() {
    if (this.selectedCategory) {
      this.openDialog('Edit category', this.selectedCategory);
    }
  }

  removeCategory() {
    if (this.selectedCategory) {
      this.categoryService.removeCategory(this.selectedCategory);
      this.openSnackBar('Category was removed.')
    }

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 3000,
    });
  }

  openDialog(title: string, category: Category = null): void {
    let dialogRef = this.dialog.open(MainDialogComponent, {
      width: '250px',
      data: {
        title,
        category
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if (result === undefined) {
        return;
      }

      if (category) {
        this.onEditingSaved(result);
      }
      else {
        this.onAddingSaved(result);
      }
    });
  }
}
