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
  constructor(private location: Location) { }

  ngOnInit() {
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
