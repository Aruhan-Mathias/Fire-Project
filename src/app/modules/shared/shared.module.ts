import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { DialogModule } from './dialog/dialog.module';

import { CandidatesService } from 'src/app/services/candidates.service';
import { DialogService } from 'src/app/services/dialog.service';
import { SharedButtonLoaderModule } from './shared-button-loader/shared-button-loader.module';
import { FormModule } from './form/form.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    DialogModule,
    FormModule,
    SharedButtonLoaderModule,
  ],
  exports: [
    FormModule,
    DialogModule,
    SharedButtonLoaderModule,
  ],
  providers: [
    CandidatesService,
    DialogService
  ]
})
export class SharedModule { }
