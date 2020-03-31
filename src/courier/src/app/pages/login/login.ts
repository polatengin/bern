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
  constructor(
    private api: ApiService, 
    private router: Router, 
    private toastController: ToastController
  ) { }

  public model: LoginModel = new LoginModel();

  ngOnInit() {}

  public login(): void {
    this.api.login(this.model).subscribe(_ => {
      this.router.navigate(['/main']);
    }, async error => {
      const toast = await this.toastController.create({
        header: 'Oh No!',
        message: "We couldn't logged you in 😢",
        position: 'top',
        color: 'danger',
        duration: 10 * 1000
      });
      toast.present();
    });
  }
}
