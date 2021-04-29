import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../app/sentiment-analysis/Response';

@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {
  analysisUrl : string = "http://127.0.0.1:5000/test/";
  constructor(private http : HttpClient) { }
  ngOnInit(){
  }

  testService()
  {
    return this.http.get<Response>(this.analysisUrl);
  }
}
