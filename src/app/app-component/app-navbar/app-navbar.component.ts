import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrdenService } from '../../app-service/orden-service/orden-service.service';
import { AppOrdenComponent } from '../app-orden/app-orden.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, AppOrdenComponent],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css'
})
export class AppNavbarComponent {
  
  constructor(private router: Router,
              private dialog: MatDialog,
              private orderService: OrdenService,
              private snackBar: MatSnackBar,
  ) {}

  onHomeClick(): void {
    this.router.navigate(['/home']);
  }

  onMenuClick(): void {
    this.router.navigate(['/menu']);
  }

  openOrderDialog(): void {
    const orderDetails = this.orderService.getOrderDetails();
    if(!orderDetails) {
      this.openSnackBar('No hay detalles del pedido.', 'Cerrar');
      return;
  }

    this.dialog.open(AppOrdenComponent, {
      width: '600px',
      height: '400px',
      data: orderDetails,
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000, 
    });
  }
}
