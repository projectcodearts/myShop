import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './all-components/footer/footer.component';
import { HeaderComponent } from './all-components/header/header.component';
import { MenuComponent } from './all-components/header/menu/menu.component';
import { MenuSocialComponent } from './all-components/header/menu-social/menu-social.component';
import { ProfileContentComponent } from './all-components/header/profile-content/profile-content.component';
import { MainMenuComponent } from './all-components/header/main-menu/main-menu.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, MenuComponent, MenuSocialComponent, ProfileContentComponent, MainMenuComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
