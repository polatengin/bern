import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public menuItems = [
    {
      title: 'Search for Deliveries',
      url: '/main',
      icon: 'search-outline'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person-outline'
    },
    {
      title: 'Delivery history',
      url: '/delivery-history',
      icon: 'cube-outline'
    },
    {
      title: 'Reports',
      url: '/reports',
      icon: 'document-text-outline'
    },
    {
      title: 'Shopping List',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Summary',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Order Details',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];

  constructor(platform: Platform, splashScreen: SplashScreen, statusBar: StatusBar) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
  }

  toggleDarkTheme(event) {
    document.body.classList.toggle('dark', event.detail.checked);
  }
}
