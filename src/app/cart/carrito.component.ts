import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from '../beer-list/beer';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  cartList$:Observable<Beer[]> | any;
  constructor(private cart:BeerCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
