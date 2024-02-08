import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './modules/layout/login/login.component';
import { MenuComponent } from './modules/menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { JwtDecoderService } from './service/jwt-decoder.service';
import { TokenDecoderStorageService } from './service/token-decoder-storage.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, HttpClientModule, LoginComponent, CommonModule, MatDialogModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  decodeToken: any
  ApiService = inject(ApiService)
  private JwtDecoderService = inject(JwtDecoderService)
  private TokenDecoderStorageService = inject(TokenDecoderStorageService)

  constructor() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      this.decodeToken = this.JwtDecoderService.decodeToken(token);
      this.TokenDecoderStorageService.setDecodedToken(this.decodeToken);
    }
  }
}
