import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pizza } from '../../app-service/pizza-service/pizza-service.service';
import { ToppingPizzaService, ToppingPizza } from '../../app-service/topping-pizza-service/topping-pizza-service.service';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-app-detalle-pizza',
  standalone: true,
  imports: [MatDialogModule, CommonModule, FormsModule, MatCheckboxModule],
  templateUrl: './app-detalle-pizza.component.html',
  styleUrl: './app-detalle-pizza.component.css'
})
export class AppDetallePizzaComponent implements OnInit{
  
  toppingPizzas: ToppingPizza[] = [];

  quantity: number = 1;

  constructor(
    public dialogRef: MatDialogRef<AppDetallePizzaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { pizza: Pizza },
    private toppingPizzaService: ToppingPizzaService) {}
    
    increaseQuantity(): void {
      this.quantity += 1; 
    }
  
    decreaseQuantity(): void {
      if (this.quantity > 1) {
        this.quantity -= 1; 
      }
    }
  
    onClose(): void {
      this.dialogRef.close({ pizza: this.data.pizza, quantity: this.quantity });
    }

    ngOnInit(): void {
      this.toppingPizzaService.getToppingPizzas().subscribe((data: ToppingPizza[]) => {
        this.toppingPizzas = data;
      });
    }
}
