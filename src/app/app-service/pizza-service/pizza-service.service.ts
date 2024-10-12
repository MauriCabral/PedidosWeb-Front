import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pizza {
  id_pizza: number;
  nombre: string;
  descripcion: string;
  precio_total: number;
  imagen: string;
} 

@Injectable({
  providedIn: 'root'
})

export class PizzaService {

  private apiUrl = 'http://localhost:8080/pizza/getAll';

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.apiUrl);
  }
}
