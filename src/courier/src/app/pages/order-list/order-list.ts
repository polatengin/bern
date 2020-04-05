import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';

import { DeliveryListResponseModel } from '../../models/main.models';
import { OrderResponseModel } from '../../models/order-list.models';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.html',
  styleUrls: ['./order-list.scss'],
})
export class OrderListPage implements OnInit {
  constructor(private api: ApiService, private barcodeScanner: BarcodeScanner, private location: Location, private router: Router) { }
  public model: DeliveryListResponseModel = new DeliveryListResponseModel();

  public response: OrderResponseModel[] = [];
}
