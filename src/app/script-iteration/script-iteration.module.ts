import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptIterationComponent } from './script-iteration.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ScriptIterationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ScriptIterationComponent]
})
export class ScriptIterationModule { }
