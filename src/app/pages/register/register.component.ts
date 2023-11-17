import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './service/register.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class RegisterComponent {
  private loggedIn = false;
  userForm = new FormGroup({
    tipo: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
  });

  constructor(private router: Router, private registerService: RegisterService,   private _snackBar: MatSnackBar) { }

  registerUser() {
    if (this.userForm.valid) {
    const user = this.userForm.value;
    this.registerService.registerUser(user).subscribe({
      next: (res) => {
        this.openSnackBar(res);
        this.router.navigate(['login']);
      },
      error: (e) => {
        this.openSnackBar(e.error);
      },
    })
  }
}

  openSnackBar(msj: string) {
    this._snackBar.open(msj, 'Cerrar', { duration: 2500 });
  }
}