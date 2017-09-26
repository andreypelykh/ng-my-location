import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { PageCategoriesComponent } from './components/page-categories/page-categories.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { PageLocationsComponent } from './components/page-locations/page-locations.component';
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { EditLocationComponent } from './components/edit-location/edit-location.component';
import { LocationsFilterComponent } from './components/locations-filter/locations-filter.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';

const appRoutes: Routes = [
  { path: 'category', component: PageCategoriesComponent },
  { path: 'location', component: PageLocationsComponent },
  { path: 'location/:lat/:lng', component: LocationDetailComponent },
  { path: '',
    redirectTo: '/category',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageCategoriesComponent,
    TopBarComponent,
    CategoriesListComponent,
    EditCategoryComponent,
    PageLocationsComponent,
    LocationsListComponent,
    EditLocationComponent,
    LocationsFilterComponent,
    LocationDetailComponent,
  ],
  imports: [
    BrowserModule,
    AsyncLocalStorageModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCB58SCEDd-OEoW7pgR7bR5BxiHZkWY2Gc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
