import { GetNewsService } from 'src/app/shared/services/get-news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  public postId;
  public postTitle;
  posts:any = [];
  category: string = 'News';
  constructor(
    private route:ActivatedRoute,
    private _getNews:GetNewsService
    ) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    let title = this.route.snapshot.paramMap.get('title');
    this.postId = id;
    this.postTitle = title;

    this._getNews.getPosts().subscribe(res=>{
      this.posts = res;
      console.log(this.posts.articles[this.postId]);
      this.posts = this.posts.articles[this.postId]
    });



  }

}
