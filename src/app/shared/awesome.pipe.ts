import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'awesome' })
/** Precede the input string with the word "Awesome " */
export class AwesomePipe implements PipeTransform {
  transform(phrase: string) {
    return phrase ? 'Awesome ' + phrase : '';
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/