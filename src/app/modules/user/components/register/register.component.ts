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
import { confirmPasswordValidator } from 'src/app/core/validators/confirm-password.validator';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private log: NGXLogger,
    private router: Router,
    private registerService: RegisterService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(7)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(7)]],
      },
      {
        validators: confirmPasswordValidator,
      }
    );
  }

  get emailFormControl(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get usernameFormControl(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }
  get passwordFormControl(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmPasswordFormControl(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
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
    if (this.registerForm.valid) {
      this.isLoading = true;
      let payload = this.registerForm.getRawValue();
      delete payload.confirmPassword;
      this.registerService.register(payload).subscribe({
        error: (e) => {
          {
            this.openSnackBar(e.error, 'Okay', 'error');
            this.log.warn(e);
            this.isLoading = false;
          }
        },
        next: (response) => {
          this.openSnackBar('Account Created', 'Okay', 'success');
          this.log.info(response);
          this.isLoading = false;
          this.router.navigateByUrl('user/login');
        },
      });
    }
  }

  redirectToLogin(): void {
    this.router.navigateByUrl('user/login');
  }
}
