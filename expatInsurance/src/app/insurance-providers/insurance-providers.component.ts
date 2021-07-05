import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-insurance-providers',
  templateUrl: './insurance-providers.component.html',
  styleUrls: ['./insurance-providers.component.scss']
})
export class InsuranceProvidersComponent implements OnInit {

  constructor() { }


  providerImg = ['aetna','allianz','axa','bupa','cigna','imglobal','integra','now-health' ];

  swiperInsuranceProviders: SwiperConfigInterface = {
    slidesPerView: 4,
    slidesPerGroup: 2,
    spaceBetween: 20,
    freeMode: true, 
    navigation: false,
    resistanceRatio: 0,
    loop: true, 
    autoplay: {
      delay: 2000
    },
    breakpoints: {
      767:{
        slidesPerView: 3,
        slidesPerGroup: 1
      },
      480:{
        slidesPerView: 2,
        slidesPerGroup: 1
      },
    }
  };
  ngOnInit() {
  }

}
