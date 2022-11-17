import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer,
         CustomersService } from './customers.service';

@Component({
  template: `
    <h3 highlight>Customer List</h3>
    <div *ngFor='let customer of customers | async'>
      <a routerLink="{{customer.id}}">{{customer.id}} - {{customer.name}}</a>
    </div>
  `
})

export class CustomersListComponent {
  customers: Observable<Customer[]>;
  constructor(private customersService: CustomersService) {
    this.customers = this.customersService.getCustomers();
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/