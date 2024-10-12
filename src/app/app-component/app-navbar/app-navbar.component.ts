import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrdenService } from '../../app-service/orden-service/orden-service.service';
import { AppOrdenComponent } from '../app-orden/app-orden.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

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
              private toastrService: ToastrService,
  ) {}

  onHomeClick(): void {
    this.router.navigate(['/home']);
  }

  onMenuClick(): void {
    this.router.navigate(['/menu']);
  }

  openOrderDialog(): void {
    const orderDetails = this.orderService.getOrderDetails();
    if (!orderDetails || orderDetails.length === 0) {
      this.toastrService.error('No hay pedidos en la orden.', 'Error');
      return;
    }
    this.dialog.open(AppOrdenComponent, {
      width: '600px',
      height: '500px',
      data: orderDetails,
    });
  }
}
