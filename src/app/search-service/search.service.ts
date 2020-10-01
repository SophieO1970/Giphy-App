import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif} from '../gif'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  gifs: Gif[];
  searchGifs(term: string) {
    let endPoint=
    `https://api.giphy.com/v1/gifs/search?api_key=${environment.apiKey}&q=${term}=&limit=25&offset=0&rating=g&lang=en`;
    let promise = new Promise((resolve, reject) => {
      this.gifs = [];
      this.http
        .get(endPoint)
        .toPromise()
        .then((result) => {
          for (let i = 0; i < result['data'].length; i++) {
            let imageUrl = result['data'][i]['images']['downsized']['url'];
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
  constructor(private http: HttpClient) {};
}


