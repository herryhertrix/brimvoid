import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
