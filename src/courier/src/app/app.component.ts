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
      title: 'Login',
      url: '/login',
      icon: 'mail'
    },
    {
      title: 'SignUp',
      url: '/signup',
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
