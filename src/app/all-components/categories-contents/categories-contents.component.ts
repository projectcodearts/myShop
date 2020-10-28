import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-contents',
  templateUrl: './categories-contents.component.html',
  styleUrls: ['./categories-contents.component.scss'],
})
export class CategoriesContentsComponent implements OnInit {

  active: boolean = false;
  sub_cat: boolean = false;
  constructor() { }
  
  sub_click(){
    this.active=!this.active;
    this.sub_cat=!this.sub_cat;
  }


  ngOnInit() {}

}
