import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentimentAnalysisComponent} from './sentiment-analysis/sentiment-analysis.component';

const routes: Routes = [
  {path:'text',component:SentimentAnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
