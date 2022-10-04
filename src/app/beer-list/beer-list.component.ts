import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})

export class BeerListComponent implements OnInit {
  
  beers:Beer[] = [{
    nombre: "La negra",
    tipo: "Porter",
    precio: 400,
    ibu: 24.7,
    stock: 107,
  },
  {
    nombre: "La Miel",
    tipo: "Honey",
    precio: 420,
    ibu: 12.3,
    stock: 140
  },
  {
    nombre: "la ger",
    tipo: "lager",
    precio: 390,
    ibu: 11.3,
    stock: 138
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
