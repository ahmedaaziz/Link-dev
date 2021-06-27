import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListingComponent } from './pages/news-listing/news-listing.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsListingComponent },
  { path: 'news/:id', component: NewsDetailsComponent },
  { path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
