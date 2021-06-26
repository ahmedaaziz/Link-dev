import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  ImgObject: Array<object> = [
    {
      src: './assets/images/slider/1.png',
      alt: 'Image 1',
    }, {
      src: './assets/images/slider/2.png',
      alt: 'Image 2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    // autoplay: {
    //   delay: 5000,
    // },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 'auto', /* Set me! */
    spaceBetween: 0,
    effect:'fade',

  };
}
