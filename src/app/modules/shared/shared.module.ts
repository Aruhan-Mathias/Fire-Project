import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogModule } from './dialog/dialog.module';
import { ButtonComponent } from './shared-button-loader/shared-button-loader.component';

import { CandidatesService } from 'src/app/services/candidates.service';
import { DialogService } from 'src/app/services/dialog.service';


@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  exports: [
    DialogModule,
    ButtonComponent
  ],
  providers: [
    CandidatesService,
    DialogService
  ]
})
export class SharedModule { }
