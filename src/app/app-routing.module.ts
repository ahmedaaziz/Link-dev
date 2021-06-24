import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListingComponent } from './pages/news-listing/news-listing.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsListingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
