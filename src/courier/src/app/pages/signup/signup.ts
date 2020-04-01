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

  model: SignUpRequestModel = new SignUpRequestModel();

  ngOnInit() {
  }

  createAccount() {
    this.api.signup(this.model).subscribe(async _ => {
      if (_.result) {
        this.router.navigate(['/signup-verify'], { state: { phoneNumber: this.model.phoneNumber } });
      } else {
        await this.accountCreationFailed();
      }
    }, async error => {
      await this.accountCreationFailed();
    });
  }

  private async accountCreationFailed() {
    const toast = await this.toastController.create({
      header: 'Oh No!',
      message: "We couldn't create your account 😢",
      position: 'top',
      color: 'danger',
      duration: 10 * 1000
    });
    toast.present();
  }

}
