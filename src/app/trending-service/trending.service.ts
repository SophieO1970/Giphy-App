import { Injectable } from '@angular/core';
import { Gif } from '../gif';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  gifs: Gif[]

  constructor() { }
}
