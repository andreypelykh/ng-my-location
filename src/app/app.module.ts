import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { AppComponent } from './app.component';
import { PageCategoriesComponent } from './components/page-categories/page-categories.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    PageCategoriesComponent,
    TopBarComponent,
    CategoriesListComponent,
    EditCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AsyncLocalStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
