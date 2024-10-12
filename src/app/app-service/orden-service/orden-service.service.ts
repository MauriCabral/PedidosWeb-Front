import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private orderDetails: any[] = []; 

  setOrderDetails(order: any): void {
    this.orderDetails.push(order); 
  }

  getOrderDetails(): any[] {
    return this.orderDetails;
  }

  clearOrderDetails(): void {
    this.orderDetails = [];
  }
}
