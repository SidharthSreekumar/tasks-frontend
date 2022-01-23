import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, UserRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class UserModule {}
