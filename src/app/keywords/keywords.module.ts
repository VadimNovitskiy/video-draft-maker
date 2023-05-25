import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeywordsComponent } from './keywords.component';



@NgModule({
  declarations: [
    KeywordsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [KeywordsComponent]
})
export class KeywordsModule { }
