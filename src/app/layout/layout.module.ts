import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FlexLayoutModule
  ],
  exports: [
    MainLayoutComponent,
  ],
  declarations: [
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
