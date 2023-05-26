import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { ScriptIterationComponent } from './script-iteration/script-iteration.component';

const routes: Routes = [
  { path: '', component: InformationComponent },
  { path: 'breakdown', component: BreakdownComponent },
  { path: 'keywords', component: KeywordsComponent },
  { path: 'script-iteration', component: ScriptIterationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
