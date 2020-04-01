import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

import { ApiService } from 'src/app/services/api.service';

import { SignUpRequestModel, SignUpResponseModel } from '../../models/signup.models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignUpPage implements OnInit {
  constructor(private api: ApiService, private router: Router, private toastController: ToastController) { }

  model: SignUpModel = new SignUpModel();

  ngOnInit() {
  }

  createAccount() {
    this.api.signup(this.model).subscribe(_ => {
      this.router.navigate(['/main']);
    }, async error => {
      const toast = await this.toastController.create({
        header: 'Oh No!',
        message: "We couldn't create your account 😢",
        position: 'top',
        color: 'danger',
        duration: 10 * 1000
      });
      toast.present();
    });
  }

}
