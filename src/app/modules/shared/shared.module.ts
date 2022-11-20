import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { DialogModule } from './dialog/dialog.module';

import { CandidatesService } from 'src/app/services/candidates.service';
import { DialogService } from 'src/app/services/dialog.service';
import { SharedButtonLoaderModule } from './shared-button-loader/shared-button-loader.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedButtonLoaderModule,
    DialogModule,
    MatDialogModule,
  ],
  exports: [
    SharedButtonLoaderModule,
    DialogModule,
  ],
  providers: [
    CandidatesService,
    DialogService
  ]
})
export class SharedModule { }
