import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

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

import { MainDialogComponent } from './components/main-dialog/main-dialog.component';

const appRoutes: Routes = [
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'building', loadChildren: 'app/building/building.module#BuildingModule' },
  { path: 'category', component: PageCategoriesComponent },
  { path: 'location', component: PageLocationsComponent },
  { path: 'location/:lat/:lng', component: LocationDetailComponent },
  { path: '',
    redirectTo: 'auth',
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
    MainDialogComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  entryComponents: [
    MainDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
