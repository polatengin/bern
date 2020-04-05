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
  public selectedIndex: number = 0;

  public menuItems = [{
    title: 'Search for Deliveries',
    url: '/main',
    icon: 'search-outline'
  }, {
    title: 'Profile',
    url: '/profile',
    icon: 'person-outline'
  }, {
    title: 'Delivery history',
    url: '/delivery-history',
    icon: 'cube-outline'
  }, {
    title: 'Reports',
    url: '/reports',
    icon: 'document-text-outline'
  }, {
    title: 'Support',
    url: '/support',
    icon: 'help-circle-outline'
  }];

  constructor(platform: Platform, splashScreen: SplashScreen, statusBar: StatusBar) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
  }

  toggleDarkTheme(event): void {
    document.body.classList.toggle('dark', event.detail.checked);
  }

  public trackByFunction(index, item): null | number {
    if(!item) {
      return null;
    }
    return index;
  }
}
