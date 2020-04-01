import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PickerOptions } from "@ionic/core";
import { PickerController, ModalController } from '@ionic/angular';

import { SetLocationPage } from '../set-location/set-location';

import { ApiService } from '../../services/api.service';

import { DeliveryListRequestModel, DeliveryListResponseModel } from '../../models/main.models';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})
export class MainPage implements OnInit {
  constructor(private api: ApiService, private router: Router, private pickerController: PickerController, private modalController: ModalController) { }

  public request: DeliveryListRequestModel = {
    latitude: 0,
    longitude: 0,
    range: 3
  };

  public response: DeliveryListResponseModel[] = [];

  public loading: boolean = true;

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(_ => {
      this.request.latitude = _.coords.latitude;
      this.request.longitude = _.coords.longitude;

      this.loadDeliveryList();
    });
  }

  showDetails(r: DeliveryListResponseModel) {
    this.router.navigate(['delivery-details'], { state: { item: r } });
  }

  loadDeliveryList() {
    this.loading = true;

    this.api.deliveryList(this.request).subscribe(_ => {
      this.response = _;

      this.loading = false;
    });
  }

  async setLocation() {
    const modal = await this.modalController.create({
      component: SetLocationPage
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();

    this.request.latitude = data.latitude;
    this.request.longitude = data.longitude;
  }

  async setRange() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler: _ => {
            this.request.range = _.Range.value;

            this.loadDeliveryList();
          }
        }
      ],
      columns:[{
        name:'Range',
        options:[
          {text: '500 m', value: 0.5},
          {text: '1 km', value: 1},
          {text: '3 km', value: 3},
          {text: '5 km', value: 5},
          {text: '10 km', value: 10},
          {text: 'any', value: 0}
        ]
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

}
