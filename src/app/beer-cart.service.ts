import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from './beer-list/beer';

//maneja la logica del carrito
@Injectable({
  providedIn: 'root'
})
export class BeerCartService {
  private _cartList: Beer[] = [];
  cartList: BehaviorSubject<Beer[] | any> =new BehaviorSubject([]);

  constructor() { }

  addToCart(beer: Beer) {
    let item:Beer | any = this._cartList.find(element=>element.nombre == beer.nombre);
    if (!item) {
      this._cartList.push({... beer});

    }else{
      item.cantidad += beer.cantidad;
    }
    console.log(this.cartList);
    //equivalente al emitt de eventos
    this.cartList.next(this._cartList);
  }

}
