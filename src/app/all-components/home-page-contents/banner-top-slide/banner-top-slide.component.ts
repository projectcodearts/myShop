import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-top-slide',
  templateUrl: './banner-top-slide.component.html',
  styleUrls: ['./banner-top-slide.component.scss'],
})
export class BannerTopSlideComponent implements OnInit {
  constructor() { }

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 1,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 0,    
  };

  ngOnInit() {}

}
