import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Gif} from '../gif';
import { TrendingService} from '../trending-service/trending.service';
import { SearchService} from '../search-service/search.service'

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  gifs: Gif[];


  constructor() { }

  ngOnInit(): void {
  }

}
