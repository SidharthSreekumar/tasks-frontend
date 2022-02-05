import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(payload: any) {
    return this.http.post('/api/user', payload);
  }
}
