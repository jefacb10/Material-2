import { NgModule} from '@angular/core';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MatIconModule } from '@angular/material/icon';

import { MatBadgeModule } from '@angular/material/badge';

import { NgxSpinnerModule } from "ngx-spinner";

const MaterialComponents = [
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  NgxSpinnerModule
];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
