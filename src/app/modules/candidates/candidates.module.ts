import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import { CandidatesDetailComponent } from './candidates-detail/candidates-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CandidatesComponent,
    CandidatesDetailComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    SharedModule
  ]
})
export class CandidatesModule { }
