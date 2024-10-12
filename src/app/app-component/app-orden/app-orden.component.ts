import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrdenService } from '../../app-service/orden-service/orden-service.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-app-orden',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './app-orden.component.html',
  styleUrl: './app-orden.component.css'
})
export class AppOrdenComponent {

  orderDetails: any[] = [];

  constructor(public dialogRef: MatDialogRef<AppOrdenComponent>,
              private ordenService: OrdenService, 
              private toastrService: ToastrService,           
  ) {}

  ngOnInit(): void {
    this.orderDetails = this.ordenService.getOrderDetails();
    console.log("Detalles del pedido recibidos:", this.orderDetails);
  }

  calculateTotalPrice(): number {
    return this.orderDetails.reduce((total, order) => {
      return total + order.totalPrice; 
    }, 0);
  }

  removeOrder(index: number): void {
    this.orderDetails.splice(index, 1); 
  }

  closeOrden(): void {
    this.dialogRef.close();
  }

  acceptOrden() {
    this.toastrService.success('Pedido realizado');
    this.orderDetails.splice(0, this.orderDetails.length); 
    this.dialogRef.close();
  }
}
