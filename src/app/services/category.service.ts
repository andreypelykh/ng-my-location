import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Category } from '../models/category.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  private categories = new BehaviorSubject<Category[]>([]);
  private currentValue: Category[];

  public constructor(protected storage: AsyncLocalStorage) {
    
  	this.storage.getItem('categories').subscribe((categories:Category[]) => {
      categories && this.categories.next(categories);
  	});

    this.categories.subscribe(e => {

      this.currentValue = e;
      console.log('new array');
    });
  }

  public getCategories(): Observable<Category[]> {
    return this.categories.asObservable();
  }

  public addCategory(category: Category) {

  	const newArray = this.currentValue.slice();
    newArray.push(category);

    this.updateStore(newArray);
  }

  public removeCategory(category: Category) {

    const newArray = this.currentValue.filter(e => e.id !== category.id);

    this.updateStore(newArray);
  }

  public changeCategory(category: Category, categoryChanges: any) {
    const changedCategory = Object.assign({}, category, categoryChanges);

    const pos = this.currentValue.indexOf(category);

    const newArray = [
      ...this.currentValue.slice(0, pos),
      changedCategory,
      ...this.currentValue.slice(pos + 1),
    ];

    this.updateStore(newArray);

    return changedCategory;
  }

  private updateStore(newValue) {
    this.categories.next(newValue);

    this.storage.setItem('categories', newValue).subscribe(() => {
      console.log('Store updated');
    }, () => {
      console.log('Store updating error');
    });
  }
 
}
