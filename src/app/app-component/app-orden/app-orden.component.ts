import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-app-orden',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-orden.component.html',
  styleUrl: './app-orden.component.css'
})
export class AppOrdenComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public orderDetails: any,
              public dialogRef: MatDialogRef<AppOrdenComponent>,            
  ) {}

  ngOnInit(): void {
    console.log("Detalles del pedido recibidos:", this.orderDetails);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
