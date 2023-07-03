import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { MainHeaderContextComponent } from './components/main-header-context/main-header-context.component';
import { MainPageNavBarComponent } from './components/main-header-context/inner-items/main-page-nav-bar/main-page-nav-bar.component';


@NgModule({
  declarations: [
    ShareComponent,
    MainHeaderContextComponent,
    MainPageNavBarComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }
