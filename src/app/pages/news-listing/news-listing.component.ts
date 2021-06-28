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
  searchTerm:string = '';
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


  // Add post to favorite

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

  // Navigate post to its page
  onSelect(post){
    this._router.navigate(['/news',post.id - 1]);
  }


  //Change Category of News Listing
  optionChange(value:number){
    console.log('Selected Value', value);
    if(!value){
      this.ngOnInit();
      console.log('empty');

    } else {
      // console.log('select changed');
      this.posts.articles = this.posts.articles.filter(res => {
          return res.sourceID == value;
      })
    }
  }


  // Keyword search in news listing

  search(){
    if(this.searchTerm == ""){
      this.ngOnInit();
      console.log('empty');

    } else {
      console.log('entered');
      this.posts.articles = this.posts.articles.filter(res => {
        // console.log(res.title.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase()));
        return res.title.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase());

      })
    }
  }

  // Showing Dropdown buttons when clicked
  status:boolean = false;
  showDropdown(){
    this.status = !this.status;
  }

  //Sort posts a to z
  sortAtoZ(){
    this.status = !this.status;

    this.posts.articles.sort(function (a, b) {
      // console.log(a.title);
      return a.title.localeCompare(b.title)


    });

  }
  //Sort posts z to a

  sortZtoA(){
    this.status = !this.status;

    this.posts.articles.sort(function (a, b) {
      // console.log(a.title);
      return b.title.localeCompare(a.title)


    });

  }



}
