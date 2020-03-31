import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

import { LoginModel } from '../../models/login.models';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit {
  constructor(private api: ApiService, private router: Router, private toastController: ToastController) { }

  model: LoginModel = new LoginModel();

  ngOnInit() {
  }

  login() {
  }
}
