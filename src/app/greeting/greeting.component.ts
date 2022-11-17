import { Component } from '@angular/core';
import { UserService } from '../greeting/user.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
})
export class GreetingComponent {
  title = 'NgModules';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/