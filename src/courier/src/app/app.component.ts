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
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Order List',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Ride History',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Shopping List',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Order History',
      url: '/folder/Archived',
      icon: 'archive'
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
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  toggleDarkTheme(event) {
    document.body.classList.toggle('dark', event.detail.checked);
  }
}
