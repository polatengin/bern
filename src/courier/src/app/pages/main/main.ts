import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})
export class MainPage implements OnInit {
  constructor(private platform: Platform) { }

  map: GoogleMap;

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    });
  }

}
