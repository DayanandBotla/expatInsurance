import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  swiperFeatures: SwiperConfigInterface = {
    slidesPerView: 3,
    slidesPerGroup: 1,
    freeMode: true, 
    navigation: false,
    resistanceRatio: 0,
    loop: true, 
    autoplay: {
      delay: 2000
    },
    breakpoints: {
      767:{
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      480:{
        slidesPerView: 1,
        slidesPerGroup: 1
      },
    }
  };

  ngOnInit() {
  }

}
