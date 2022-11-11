import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from 'src/app/modules/candidates/candidates.component';
import { HomeComponent } from '../home/home.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [

  { path: '', component: LayoutComponent, children: [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
    { path: 'candidates', component: CandidatesComponent, loadChildren: () => import('../../modules/candidates/candidates.module').then(m => m.CandidatesModule) },

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
