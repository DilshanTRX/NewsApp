import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import { MainProcessContextComponent } from './components/main-process-context/main-process-context.component';


@NgModule({
  declarations: [
    ProcessComponent,
    MainProcessContextComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule
  ]
})
export class ProcessModule { }
