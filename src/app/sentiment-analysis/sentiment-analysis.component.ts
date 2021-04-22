import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SharedService } from '../shared.service';
import {HttpClient, HttpClientModule,HttpHeaders, HttpParams} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {
  msg:string;
  textToAnalyzeValue:string;
  result:string;
  // private subscription: Subscription;

  constructor(private http: HttpClient) { 
    this.textToAnalyzeValue = '';
    this.msg='';
    this.result = '';
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
    console.log(textToAnalyzeValue);
    // var result = (this.sharedService.analyzeText(textToAnalyzeValue));
    var result2 = this.http.get<string>('http://127.0.0.1:5000/').subscribe();
    console.log(result2);
    var result = this.testHL();
    console.log(result);
  }
  clickEvent(){
   this.msg='Button is Clicked';
   return this.msg;
 }
}
