import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private log: NGXLogger) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get emailFormControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get passwordFormControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit(): void {
    this.log.error('Test error', 'check')
  }
}
