import { Component, OnInit } from '@angular/core';
import { PizzaService, Pizza } from '../../app-service/pizza-service/pizza-service.service';
import { ToppingPizzaService, ToppingPizza } from '../../app-service/topping-pizza-service/topping-pizza-service.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OrdenService } from '../../app-service/orden-service/orden-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-menu',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCheckboxModule],
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css'] 
})

export class AppMenuComponent implements OnInit {
  
  pizzas: Pizza[] = [];
  toppingPizzas: ToppingPizza[] = [];
  selectedPizza: Pizza | null = null;
  quantity: number = 1;
  selectedToppings: { topping: ToppingPizza, extra: boolean }[] = [];
  totalPrice: number = 0;
  savedOrders: any[] = [];

  constructor(private pizzaService: PizzaService,
    private toppingPizzaService: ToppingPizzaService,
    private orderService: OrdenService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe((data: Pizza[]) => {
      this.pizzas = data;
    });
    this.toppingPizzaService.getToppingPizzas().subscribe((data: ToppingPizza[]) => {
      this.toppingPizzas = data;
    });
  }

  onDetallePizzaClick(pizza: Pizza): void {
    this.selectedPizza = pizza;
    this.totalPrice = pizza.precio_total;
    this.selectedToppings = [];
  }

  increaseQuantity(): void {
    this.quantity += 1;
    this.calculateTotalPrice(); 
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity -= 1; 
      this.calculateTotalPrice();
    }
  }

  toggleTopping(topping: ToppingPizza, isChecked: boolean, action: string): void {
    if (isChecked) {
      if (action === 'extra') {
        this.selectedToppings.push({ topping: topping, extra: true });
      } else if (action === 'quitar') {
        this.selectedToppings.push({ topping: topping, extra: false });
      }
    } else {
      const index = this.selectedToppings.findIndex(t => t.topping === topping && t.extra === (action === 'extra'));
      if (index > -1) {
        this.selectedToppings.splice(index, 1);
      }
    }
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    let total = this.selectedPizza ? this.selectedPizza.precio_total : 0;
    this.selectedToppings.forEach(selected => {
      if (selected.extra) {
        total += selected.topping.precio;
      }
    });
    this.totalPrice = total * this.quantity;
  }

  saveOrderDetails(): void {
    if (!this.selectedPizza) {
      console.error('No se ha seleccionado ninguna pizza.');
      return;
    }
    const orderDetails = {
      pizza: this.selectedPizza,
      toppings: this.selectedToppings,
      totalPrice: this.totalPrice,
      quantity: this.quantity
    };  
    this.orderService.setOrderDetails(orderDetails);
    console.log('Pedido guardado en el servicio.');
    this.selectedPizza = null;
  }
  
  close() { 
    this.selectedPizza = null;
  }
}