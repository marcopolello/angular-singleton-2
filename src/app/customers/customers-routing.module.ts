import { NgModule } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list.component';
import { CustomersDetailComponent } from './customers-detail.component';

const routes: Routes = [
  { path: '',
    component: CustomersComponent,
    children: [
      { path: '',    component: CustomersListComponent },
      { path: ':id', component: CustomersDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/