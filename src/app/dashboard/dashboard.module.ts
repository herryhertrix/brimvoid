import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ShrtcodeComponent } from '../utils/shrtcode/shrtcode.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShrtcodeChildComponent } from '../utils/shrtcode-child/shrtcode-child.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ShrtcodeComponent,
    ShrtcodeChildComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
