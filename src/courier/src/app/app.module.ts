import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PreloadAllModules, RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';

import { LandingPage } from './pages/landing/landing';
import { LoginPage } from './pages/login/login';
import { SignUpPage } from './pages/signup/signup';
import { MainPage } from './pages/main/main';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }, {
    path: 'landing',
    component: LandingPage
  }, {
    path: 'login',
    component: LoginPage
  }, {
    path: 'signup',
    component: SignUpPage
  }, {
    path: 'main',
    component: MainPage
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    LoginPage,
    SignUpPage,
    MainPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
