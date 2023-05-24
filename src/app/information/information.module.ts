import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InformationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class InformationModule { }
