import { News } from './../interfaces/news/news';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetNewsService {

  constructor(private http: HttpClient) {

  }

  getPosts(){
    return this.http.get<News[]>('https://api.npoint.io/e2534d5412765bf36702')
    .pipe(map(res => res || []));
  }
  getCategories(){
    return this.http.get<News[]>('https://api.npoint.io/c138bb84dc0b94ec5a18')
    .pipe(map(res => res || []));
  }
}
