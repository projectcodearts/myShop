import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { SharedModule } from '../../shared/shared.module';
import { HeaderCommonWidgetComponent } from '../../all-components/header-common-widget/header-common-widget.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HeaderCommonWidgetComponent    
  ]
})
export class HomePageModule {}
