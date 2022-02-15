import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private log: NGXLogger,
    private router: Router,
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  get emailFormControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get passwordFormControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  openSnackBar(
    message: string,
    buttonLabel: string,
    className: string = ''
  ): void {
    this.snackBar.open(message, buttonLabel, {
      duration: 5000,
      panelClass: className,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.log.info(this.loginForm.getRawValue());
      let payload = this.loginForm.getRawValue();
      this.loginService.login(payload).subscribe({
        error: (e) => {
          this.openSnackBar(e.error, 'Okay', 'error');
          this.isLoading = false;
          this.log.warn(e);
        },
        next: (response) => {
          this.openSnackBar('Login Successful', 'Okay', 'success');
          this.log.info(response);
          this.isLoading = false;
          this.router.navigateByUrl('/');
        },
      });
    }
  }

  redirectToRegister(): void {
    this.router.navigateByUrl('user/register');
  }
}
