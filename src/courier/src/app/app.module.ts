import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PreloadAllModules, RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { AgmCoreModule } from '@agm/core';

import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';

import { LandingPage } from './pages/landing/landing';
import { LoginPage } from './pages/login/login';
import { SignUpPage } from './pages/signup/signup';
import { SignUpVerifyPage } from './pages/signup-verify/signup-verify';
import { MainPage } from './pages/main/main';
import { ProfilePage } from './pages/profile/profile';
import { SetLocationPage } from './pages/set-location/set-location';
import { DeliveryDetailsPage } from './pages/delivery-details/delivery-details';
import { OrderListPage } from './pages/order-list/order-list';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
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
    path: 'signup-verify',
    component: SignUpVerifyPage
  }, {
    path: 'main',
    component: MainPage
  }, {
    path: 'profile',
    component: ProfilePage
  }, {
    path: 'delivery-details',
    component: DeliveryDetailsPage
  }, {
    path: 'order-list',
    component: OrderListPage
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    LoginPage,
    SignUpPage,
    SignUpVerifyPage,
    MainPage,
    ProfilePage,
    SetLocationPage,
    DeliveryDetailsPage,
    OrderListPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0Ty2hDtvG1z12leVpRKAbtytHkccM9hg'
    }),
    IonicModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    ApiService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
