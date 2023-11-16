import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class LoginComponent {
  userForm = new FormGroup({
    tipo: new FormControl('DNI', [Validators.required]),
    numero: new FormControl('43785131', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    clave: new FormControl('123123', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
  });
}
