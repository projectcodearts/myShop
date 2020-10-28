import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrypoint-content',
  templateUrl: './entrypoint-content.component.html',
  styleUrls: ['./entrypoint-content.component.scss'],
})
export class EntrypointContentComponent implements OnInit {

  constructor() { }

  slideOpts = {
    initialSlide: 0,
    autoplay:true,
    freeMode: false,
    speed: 400,
    slidesPerView: 1,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 0
  };

  ngOnInit() {}

}
