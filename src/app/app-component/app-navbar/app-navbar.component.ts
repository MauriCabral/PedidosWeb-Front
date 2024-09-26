import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css'
})
export class AppNavbarComponent {
  
  constructor(private router: Router) {}

  onHomeClick(): void {
    window.location.href = 'http://localhost:4200'; 
  }

  onMenuClick(): void {
    this.router.navigate(['/menu']).then(() => {
    });
  }
}
