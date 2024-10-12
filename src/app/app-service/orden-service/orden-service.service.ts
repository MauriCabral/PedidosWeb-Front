import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private orderDetails: any = null;

  setOrderDetails(order: any): void {
    this.orderDetails = order;
  }

  getOrderDetails(): any {
    return this.orderDetails;
  }

  clearOrderDetails(): void {
    this.orderDetails = null;
  }
}
