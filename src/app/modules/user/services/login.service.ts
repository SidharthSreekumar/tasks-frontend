import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SessionResponse } from 'src/app/core/models/session-response.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  login(payload: any) {
    return this.http.post('/api/session', payload).pipe(
      map((res: SessionResponse) => {
        this.authenticationService.setTokens(res);
      })
    );
  }
}
