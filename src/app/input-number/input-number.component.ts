import { Component,Input, OnInit } from '@angular/core';
import { Beer } from '../beer-list/beer';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }
  @Input()
  beer: Beer;
  ngOnInit(): void {
  }

  incrementar(beer:Beer):void{
    if (beer.cantidad < beer.stock) 
      beer.cantidad++;
      
    
  }

  decrementar(beer:Beer):void{
    if (beer.cantidad > 0)
    beer.cantidad--;
  }
  cambioDeCantidad(beer:Beer):void{
    if(beer.cantidad > beer.stock) {
      alert("No hay suficientes cervezas en stock");
    }
    if(beer.cantidad < 0) {
      alert("No se pueden encargar cervezas negativas ");
    }
    beer.cantidad = 0;
  }
  
  
}
