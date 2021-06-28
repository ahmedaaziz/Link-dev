import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  clicked:any = [];
  constructor(
    private _getLatestNews:GetNewsService,
    private _router : Router
     ) { }

  ngOnInit(): void {
    this._getLatestNews.getPosts().subscribe(res=>{
      this.latestPosts = res;
      console.log(this.latestPosts);
      console.log('Latest News Loaded!');

    });
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
    this._router.navigate(['/news',post.id - 1]);
  }



}
