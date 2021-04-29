import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReviewModel } from '../model/review.model';

@Injectable({
  providedIn: 'root'
})

export class ReviewServicesService {
  private url = 'http://127.0.0.1:5000'
  constructor(private http: HttpClient) { }

  evaluateReview(review: string): Promise<ReviewModel> {
    return new Promise<ReviewModel>((resolve, reject) => {
      this.http.get(`${this.url}/analyze/${review}`)
        .subscribe((resp: any) => {
          //console.log(resp);
          resolve(resp);
          return resp;
        }, error => {
          console.log(error);
          let respError = error;
          if (error.status === 404) {
            respError = ['Service not found'];
          }
          reject(respError);
        }
        );
    })
  }

  // probarTest():Promise<HeroeModel>{
  //   return new Promise<HeroeModel>((resolve, reject) => {
  //     this.http.get(`${this.url}/test`)
  //     .subscribe((resp: any) => {
  //       console.log(resp);
  //       resolve(resp);
  //     }, error => {
  //       let respError = error;
  //       if ( error.status === 500 ){
  //         respError = ['Error'];
  //       }
  //       reject(respError);
  //     }
  //     );
  //   }); 
  // }
}
