import { Component, OnInit } from '@angular/core';
import { PizzaService, Pizza } from '../../app-service/pizza-service/pizza-service.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AppDetallePizzaComponent } from '../app-detalle-pizza/app-detalle-pizza.component';

@Component({
  selector: 'app-app-menu',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css'] 
})

export class AppMenuComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe((data: Pizza[]) => {
      this.pizzas = data;
    });
  }

  onDetallePizzaClick(pizza: Pizza): void {
      this.dialog.open(AppDetallePizzaComponent, {
        width: '1000px', 
        height: '600px',
        data: { pizza: pizza }  
    });
  }
}