import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'expatInsurance';
  
  hideBannerImage:boolean = false;
 
  @HostListener('window:resize') onResize() {
    this.hideBannerImages();
  }

  @HostListener('window:orientationchange') onRotate() {
    this.hideBannerImages();
  }

  constructor(){
    this.hideBannerImages();

  }


  hideBannerImages() {
    var ww = document.body.clientWidth;
     if ((ww >= 768) && !((window.matchMedia("(orientation: landscape)").matches && ww <= 860 ) )) {
      this.hideBannerImage = true;
  
    } else {
      this.hideBannerImage = false;
    }
  } 
}
