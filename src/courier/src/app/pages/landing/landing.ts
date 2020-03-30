import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss'],
})
export class LandingPage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
