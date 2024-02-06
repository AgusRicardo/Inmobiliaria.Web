import { Component, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu'
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatListModule, MatTooltipModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  onClickLogout(){
    localStorage.removeItem('token');
    window.location.reload();
    this.router.navigate(['/login']);
  }
}
