import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  sourceId:any= [];
  categories:any =[];
  constructor(
    private _getNews: GetNewsService,
    private _router : Router
    ) { }

  ngOnInit(): void {
    this._getNews.getPosts().subscribe(res=>{
      this.posts = res;
      console.log(this.posts);

    });

    this._getNews.getCategories().subscribe(res=> {
      this.categories = res;
      console.log(this.categories);

    })
  }

  fillHeart(i:number){
    this.filled = !this.filled;
    console.log(i);
    // console.log(this.clicked);
    if(!this.clicked.includes(i)){
      this.clicked.push(i);
      console.log(this.clicked);
    } else {
      this.clicked.splice(i);
      console.log(this.clicked);
    }
  }

  onSelect(post){
    this._router.navigate(['/news',post.id]);
  }
}
