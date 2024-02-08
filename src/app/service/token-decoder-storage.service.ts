import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenDecoderStorageService {
  private decodedToken: any;

  constructor() { }

  setDecodedToken(token: any): void {
    this.decodedToken = token;
  }

  getDecodedToken(): any {
    return this.decodedToken;
  }
}
