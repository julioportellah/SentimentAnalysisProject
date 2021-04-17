import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APITextAnalysis = "http://127.0.0.1:5080";
  readonly PhotoUrl = "http://127.0.0.1:8080/media/";
  constructor(private http:HttpClient) { }

  testGetService():Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:5000/');
  }

  analyzeText(text: string){
    var inputData='{"value":'+ text+'}'
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let params = new HttpParams().set("requestData", encodeURIComponent(inputData));

    return this.http.get<any[]>('http://127.0.0.1:5000/analyze', {params: params})
  }
  //analyzeReview(val:any):Observable<any[]>
}
