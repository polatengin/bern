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

  public buttonText: string = 'Go';
  public buttonIcon: string = 'chevron-forward-outline';

  public step: number = -1;
  public step0: string = 'dark';
  public step1: string = 'dark';
  public step2: string = 'dark';

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
    this.step++;

    switch(this.step) {
      case 0:
        this.buttonText = 'Report arrival';
        this.buttonIcon = 'checkmark-outline';
        this.step0 = 'primary';
        break;
      case 1:
        this.buttonText = 'Order list';
        this.buttonIcon = 'list-circle-outline';
        this.step1 = 'primary';
        break;
      case 2:
        this.router.navigate(['order-list'], { state: { item: this.model } });
        this.buttonText = 'Delivery finished';
        this.buttonIcon = 'checkmark-outline';
        this.step2 = 'primary';
        break;
      case 3:
        this.location.back();
        break;
    }
  }

}
