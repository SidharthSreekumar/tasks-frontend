import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'ngx-webstorage';
import { SessionResponse } from '../models/session-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  jwtService: any;
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.jwtService = new JwtHelperService();
  }

  setTokens(tokens: SessionResponse) {
    this.localStorageService.store('access-token', tokens.accessToken);
    this.localStorageService.store('refresh-token', tokens.refreshToken);
  }

  isAuthenticated(): boolean {
    return !this.jwtService.isTokenExpired(
      this.localStorageService.retrieve('access-token')
    );
  }

  logout() {
    this.wipeUserData();
    this.router.navigateByUrl('/user/login');
  }

  wipeUserData() {
    this.localStorageService.clear('access-token');
    this.localStorageService.clear('refresh-token');
  }
}
