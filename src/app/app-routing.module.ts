import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { AboutAuthorsComponent } from './about-authors/about-authors.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LinkToGithubComponent } from './link-to-github/link-to-github.component';

const routes: Routes = [
  { path: 'text', component: SentimentAnalysisComponent },
  { path: 'authors', component: AboutAuthorsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'github', component: LinkToGithubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
