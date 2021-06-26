import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/interfaces/news/news';
import { GetNewsService } from 'src/app/shared/services/get-news.service';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {
  posts:any = [];
  filled:boolean = false;
  clicked:any = [];
  constructor(private _getNews: GetNewsService) { }

  ngOnInit(): void {
    this._getNews.getPosts().subscribe(res=>{
      this.posts = res;
      console.log(this.posts);
    });

  }
  
  fillHeart(i){
    this.filled = !this.filled;
    console.log(i);
    this.clicked.push(i);
    // console.log(this.clicked);

  }

}
