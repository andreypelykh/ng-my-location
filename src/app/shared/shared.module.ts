import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '../../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CustomMaterialModule } from './custom-material/custom-material.module';

export const modulesList = [
	CommonModule,
  CustomMaterialModule,
  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
  AngularFireStorageModule // imports firebase/storage only needed for storage features
];

@NgModule({
  imports: modulesList,
  exports: modulesList,
  declarations: []
})
export class SharedModule { }
