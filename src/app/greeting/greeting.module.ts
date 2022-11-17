import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { GreetingComponent } from './greeting.component';
import { UserServiceConfig } from './user.service';

@NgModule({
  imports: [CommonModule],
  declarations: [GreetingComponent],
  exports: [GreetingComponent],
})
export class GreetingModule {
  constructor(@Optional() @SkipSelf() parentModule?: GreetingModule) {
    if (parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(
    config: UserServiceConfig
  ): ModuleWithProviders<GreetingModule> {
    console.log(config);
    return {
      ngModule: GreetingModule,
      providers: [{ provide: UserServiceConfig, useValue: config }],
    };
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
