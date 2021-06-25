import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/shared/services/get-news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  latestPosts:any = [];
  showOnHome:boolean = false;
  filled:boolean = false;
  constructor(private _getLatestNews:GetNewsService ) { }

  ngOnInit(): void {
    this._getLatestNews.getPosts().subscribe(res=>{
      this.latestPosts = res;
      console.log(this.latestPosts);
      console.log('Latest News Loaded!');

    });
  }
  fillHeart(){
    this.filled = !this.filled;
  }
}
