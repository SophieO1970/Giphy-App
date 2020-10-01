import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif } from '../gif';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  gifs: Gif[]

  fetchTrendingGifs() {
    let endPoint =
    `https://api.giphy.com/v1/gifs/trending?api_key=PzJepCuq92wLXRMbCEMEysLCyzibTIsC&limit=25&rating=g`;
    let promise = new Promise((resolve, reject) => {
      this.gifs = [];
      this.http
        .get(endPoint)
        .toPromise()
        .then((results) => {
          for (let i = 0; i < results['data'].length; i++) {
            let imageUrl = results['data'][i]['images']['original']['url'];
            let gif = new Gif(imageUrl);
            this.gifs.push(gif);
            resolve();
          }
          (error) => {
            console.log(error);
            reject();
          };
        });
    });
    return promise;
  }

  }


  constructor(private http: HttpClient) {}
}
