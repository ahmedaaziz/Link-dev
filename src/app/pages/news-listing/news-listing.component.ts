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
  constructor(private _getNews: GetNewsService) { }

  ngOnInit(): void {
    // this._getNews.getPosts().subscribe((data => {
    //   this.posts = data;
    //   console.log(this.posts);
    //   console.log(typeof(this.posts));

    // }));
    this._getNews.getPosts().subscribe(res=>{
      this.posts = res;
      console.log(this.posts);
    });

  }
  // loadPosts(){
  //   this._getNews.getPosts().subscribe(
  //     next=> {
  //       console.log(next)
  //     },
  //     error=>{
  //       console.log(error)

  //     },
  //     ()=>{
  //       console.log('DONE');

  //     }
  //   )
  // }
}
