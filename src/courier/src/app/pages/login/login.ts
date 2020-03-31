import { Component, OnInit } from '@angular/core';
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

}
