import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ModalController } from '@ionic/angular';

import { ApiService } from '../../services/api.service';

import { AddressFromCoordinatesRequestModel, SearchAddressRequestModel, SearchAddressResponseModel } from '../../models/set-location.models';

@Component({
  selector: 'app-set-location',
  templateUrl: './set-location.html',
  styleUrls: ['./set-location.scss'],
})
export class SetLocationPage implements OnInit {
  constructor(private location: Location, private modalController: ModalController, private api: ApiService) { }

  currentAddress: string;
  addressList: SearchAddressResponseModel[] = [];

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      let request = new AddressFromCoordinatesRequestModel();
      request.latitude = position.coords.latitude;
      request.longitude = position.coords.longitude;

      this.api.getAddressFromCoordinates(request).subscribe(_ => {
        this.currentAddress = _.address;
      });
    });
  }

  search(event: InputEvent) {
    let model: SearchAddressRequestModel = new SearchAddressRequestModel();
    model.keyword = (event.target as HTMLInputElement).value;

    this.api.searchAddress(model).subscribe(_ => {
      this.addressList = _;
    });
  }

  select(selected: SearchAddressResponseModel) {
    this.modalController.dismiss(selected);
  }

  goBack() {
    this.location.back();
  }

}
