import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ToppingPizza {
  nombre: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})

export class ToppingPizzaService {

  private apiUrl = 'http://localhost:8080/toppingPizza/getAll';

  constructor(private http: HttpClient) { }

  getToppingPizzas(): Observable<ToppingPizza[]> {
    return this.http.get<ToppingPizza[]>(this.apiUrl);
  }
}
