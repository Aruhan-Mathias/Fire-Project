import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';

import { DialogCandidatesComponent } from './dialog-candidates/dialog-candidates.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedButtonLoaderModule } from '../shared-button-loader/shared-button-loader.module';

import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    DialogCandidatesComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatTabsModule,
    NgxMaskModule,
    SharedButtonLoaderModule
  ],
  exports: [
    MatInputModule
  ]
})
export class DialogModule { }
