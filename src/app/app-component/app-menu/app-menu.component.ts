import { Component, OnInit } from '@angular/core';
import { PizzaService, Pizza } from '../../app-service/pizza-service/pizza-service.service';
import { ToppingPizzaService, ToppingPizza } from '../../app-service/topping-pizza-service/topping-pizza-service.service';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OrdenService } from '../../app-service/orden-service/orden-service.service';
import { ToastrService } from 'ngx-toastr';

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
  totalPrice: number = 0;
  addedToppings: { topping: ToppingPizza, extra: boolean }[] = [];
  removedToppings: { topping: ToppingPizza, extra: boolean }[] = [];


  constructor(private pizzaService: PizzaService,
    private toppingPizzaService: ToppingPizzaService,
    private orderService: OrdenService,
    private toastrService: ToastrService,
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
    this.addedToppings = [];    
    this.removedToppings = [];
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
        this.addedToppings.push({ topping: topping, extra: true });
      } else if (action === 'quitar') {
        this.removedToppings.push({ topping: topping, extra: false });
      }
    } else {
      if (action === 'extra') {
        const index = this.addedToppings.findIndex(t => t.topping === topping);
        if (index > -1) {
          this.addedToppings.splice(index, 1);
        }
      } else if (action === 'quitar') {
        const index = this.removedToppings.findIndex(t => t.topping === topping);
        if (index > -1) {
          this.removedToppings.splice(index, 1);
        }
      }
    }
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    let total = this.selectedPizza ? this.selectedPizza.precio_total : 0;
    this.addedToppings.forEach(selected => {
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
      addedToppings: this.addedToppings,
      removedToppings: this.removedToppings,
      totalPrice: this.totalPrice,
      quantity: this.quantity
    }; 
    this.orderService.setOrderDetails(orderDetails);
    console.log('Pedido guardado en el servicio.');
    this.toastrService.success('Pedido agregado a la orden.');
    this.selectedPizza = null;
    this.addedToppings = [];
    this.removedToppings = [];
  }
  
  close() { 
    this.selectedPizza = null;
  }
}