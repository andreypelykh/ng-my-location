import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class LocationService {
 
  public constructor(protected storage: AsyncLocalStorage) {}
 
  public ngOnInit() {
 
    this.storage.setItem('lang', 'fr').subscribe(() => {
      // Done
    });
 
  }
 
}
