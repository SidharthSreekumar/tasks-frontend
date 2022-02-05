import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-webstorage';
import { SessionResponse } from '../models/session-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  @LocalStorage('access-token')
  accessToken: string = '';

  @LocalStorage('refresh-token')
  refreshToken: string = '';
  constructor() { }

  setTokens (tokens: SessionResponse) {
    this.accessToken = tokens.accessToken;
    this.refreshToken = tokens.refreshToken;
  }
}
