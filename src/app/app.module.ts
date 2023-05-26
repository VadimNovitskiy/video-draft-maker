import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationModule } from './information/information.module';
import { BreakdownModule } from './breakdown/breakdown.module';
import { KeywordsModule } from './keywords/keywords.module';
import { ScriptIterationModule } from './script-iteration/script-iteration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InformationModule,
    BreakdownModule,
    KeywordsModule,
    ScriptIterationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
