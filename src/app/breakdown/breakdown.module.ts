import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakdownComponent } from './breakdown.component';



@NgModule({
  declarations: [
    BreakdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BreakdownComponent]
})
export class BreakdownModule { }
