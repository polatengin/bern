import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-set-location',
  templateUrl: './set-location.html',
  styleUrls: ['./set-location.scss'],
})
export class SetLocationPage implements OnInit {
  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
