import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SharedService } from '../shared.service';
import {HttpClient, HttpClientModule,HttpHeaders, HttpParams} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RestService } from '../rest.service';
import { ReviewServicesService } from '../services/review-services.service';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {
  msg:string;
  textToAnalyzeValue:string;
  result:string;
  resultAnalysis:number;
  // private subscription: Subscription;

  constructor(private http: HttpClient, private rs:RestService, private reviewService:ReviewServicesService) { 
    this.textToAnalyzeValue = '';
    this.msg='';
    this.result = '';
    this.resultAnalysis = -1;
    // this.subscription = this.sharedService.pipe().subscribe();
  }
  
  ngOnInit(): void {
  }

  testHL():Observable<any>{
    return  this.http.get<string>('http://127.0.0.1:5000/test/').pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }));
    // this.http.get<string>('http://127.0.0.1:5000/test/').subscribe();
  }

  onAnalyze(textToAnalyzeValue: string) {
    if (textToAnalyzeValue!="")
    {
      this.reviewService.evaluateReview(textToAnalyzeValue).then(answer=>{
        this.resultAnalysis=Math.round(answer.reviewValue*100);
      });
    }else{
      this.resultAnalysis = -1
    }
  }
  clickEvent(){
   this.msg='Button is Clicked';
   return this.msg;
 }
}
