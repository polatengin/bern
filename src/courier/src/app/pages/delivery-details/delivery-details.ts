import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Router } from '@angular/router';

import { DeliveryListResponseModel } from '../../models/main.models';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.html',
  styleUrls: ['./delivery-details.scss'],
})
export class DeliveryDetailsPage implements OnInit {
  constructor(private location: Location, private router: Router) { }

  public model: DeliveryListResponseModel = new DeliveryListResponseModel();

  ngOnInit() {
    let state = this.router.getCurrentNavigation().extras.state;
    if (state) {
      this.model = state.item;
    }
  }

  goBack() {
    this.location.back();
  }

  start() {
    console.log('starting delivery...');
  }

}
