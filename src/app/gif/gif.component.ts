import { Component, OnInit } from '@angular/core';
import {Gif} from '../gif';
import { TrendingService} from '../trending-service/trending.service';
import { SearchService} from '../search-service/search.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  gifs: Gif[];

  constructor(public trendingService: TrendingService, public searchService: SearchService) {}



  ngOnInit(): void {
    this.getTrending();
  }

  getTrending(){
    this.trendingService.fetchTrendingGifs().then(
      () => {
        this.gifs = this.trendingService.gifs;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchGifs(term: string){
    this.searchService.searchGifs(term).then(
      () => {
        this.gifs = this.searchService.gifs;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
