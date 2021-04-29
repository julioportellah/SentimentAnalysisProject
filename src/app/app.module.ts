import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import {SharedService} from "./shared.service";

import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RestService } from './rest.service';
import { AboutAuthorsComponent } from './about-authors/about-authors.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LinkToGithubComponent } from './link-to-github/link-to-github.component';

@NgModule({
  declarations: [
    AppComponent,
    SentimentAnalysisComponent,
    AboutAuthorsComponent,
    HowItWorksComponent,
    LinkToGithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [SharedService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
