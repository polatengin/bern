import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-verify',
  templateUrl: './signup-verify.html',
  styleUrls: ['./signup-verify.scss'],
})
export class SignUpVerifyPage implements OnInit {
  constructor(private location: Location, private router: Router) {
  }

  phoneNumber: string;

  ngOnInit() {
    let state = this.router.getCurrentNavigation().extras.state;
    if (state) {
      this.phoneNumber = state.phoneNumber;
    }
  }

  ngAfterViewInit() {
    let input: HTMLElement = document.querySelectorAll('.pinCodeInput').item(0) as HTMLElement;
    setTimeout(() => { input.focus(); }, 150);
  }

  onKeyUp($event: any, item: any, index: number) {
    let v_index: number;

    let reg = new RegExp("[0-9]");

    if ($event.key == "Backspace") {
      v_index = index - 1;
      if (v_index < 0) {
        v_index = 0;
      }
    } else {
      if (reg.test($event.target.value)) {
        if (index === 3) {
          v_index = 3;
        } else {
          v_index = index + 1;
        }
      }
    }

    let input: HTMLElement = document.querySelectorAll('.pinCodeInput').item(v_index) as HTMLElement;
    input.focus();

    if (index === 3 && $event.key != "Backspace") {
      let pinCodeValue: string = '';
      for (let iLoop = 0; iLoop < 4; iLoop++) {
        const element = document.querySelectorAll('.pin' + iLoop)[0] as HTMLInputElement;
        pinCodeValue += element.value;
      }

      this.router.navigate(['main']);
    }
  }

  onKeyDown($event: any) {
    if ($event.key != "Backspace") {
      if ($event.target.value.length == 1) {
        return false;
      }
    }
  }

  goBack() {
    this.location.back();
  }

}
