import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsListingComponent } from './pages/news-listing/news-listing.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { SliderComponent } from './features/slider/slider.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HttpClientModule } from '@angular/common/http';
import { GetNewsService } from './shared/services/get-news.service';
import { ConvertObjPipe } from './shared/pipes/convert-obj.pipe';
import { LatestNewsComponent } from './features/latest-news/latest-news.component';
import { HowAIHelpedComponent } from './features/how-ai-helped/how-ai-helped.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsListingComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    ConvertObjPipe,
    LatestNewsComponent,
    HowAIHelpedComponent,
    NewsDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    NgxUsefulSwiperModule,
    HttpClientModule
  ],
  providers: [GetNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
