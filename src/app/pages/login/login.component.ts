import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LoginComponent {
  userForm = new FormGroup({
    numero: new FormControl('43785131', [Validators.required]),
    tipo: new FormControl('DNI', [Validators.required]),
    password: new FormControl('Challenge', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
  });

  constructor(private router: Router, private loginService: LoginService, private _snackBar: MatSnackBar) { }

  loginUser() {
    const user = this.userForm.value;
    this.loginService.loginUser(user).subscribe({
      next: () => {
        this.loginService.setLoggedIn(true);
        this.router.navigate(['home']);
      },
      error: (e) => {
        this.openSnackBar(e.message);
      },
    })
  }

  openSnackBar(msj: string) {
    this._snackBar.open(msj, 'Cerrar', { duration: 2500 });
  }
}
