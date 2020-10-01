import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif} from '../gif'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  gifs: Gif[];

  constructor(private http: HttpClient) { }
}
