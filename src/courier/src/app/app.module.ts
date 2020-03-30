import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PreloadAllModules, RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';

import { LandingPage } from './pages/landing/landing';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }, {
    path: 'landing',
    component: LandingPage
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LandingPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
