import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Beer } from '../beer-list/beer';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }
  /* Recibe valores de entrada, es la forma de representar cuando llegan con @Input() */
  @Input()
  cantidad: number;
  @Input()
  max: number;

  @Output()
  cambiosDeCantiddad: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit(): void {
  }

  incrementar():void{
    if (this.cantidad < this.max){
      this.cantidad++;
      this.cambiosDeCantiddad.emit(this.cantidad);
    }
      
    
  }

  decrementar():void{
    if (this.cantidad > 0){
      this.cantidad--;
      this.cambiosDeCantiddad.emit(this.cantidad);
    }
  }
  cambioDeCantidad(event):void{
   console.log(event.key);
   this.cambiosDeCantiddad.emit(this.cantidad);
  }
  
  
}
