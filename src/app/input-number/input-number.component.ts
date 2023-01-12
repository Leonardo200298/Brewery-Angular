import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { 
  }

  /* Recibe valores de entrada, es la forma de representar cuando llegan con @Input() */
  @Input()
  cant: number;
  @Input()
  max: number;

  @Output()
  cambiosDeCantiddad: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit(): void {
  }

  incrementar():void{
    if (this.cant < this.max){
      this.cant++;
      this.cambiosDeCantiddad.emit(this.cant);
    }
      
    
  }

  decrementar():void{
    if (this.cant > 0){
      this.cant--;
      this.cambiosDeCantiddad.emit(this.cant);
    }
  }
  cambioDeCantidad(event):void{
   console.log(event.key);
   this.cambiosDeCantiddad.emit(this.cant);
  }
  
  
}
