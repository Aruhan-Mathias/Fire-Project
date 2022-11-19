import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';

import { DialogCandidatesComponent } from './dialog-candidates/dialog-candidates.component';
import { ReactiveFormsModule } from '@angular/forms';


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
  ],
  exports: [
    MatInputModule
  ]
})
export class DialogModule { }
