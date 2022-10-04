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
    stock: 0
  },
  {
    nombre: "la primavera",
    tipo: "IPA",
    precio: 400,
    ibu: 43.3,
    stock: 0
  },
  {
    nombre: "la ladrona",
    tipo: "Stout",
    precio: 410,
    ibu: 10.2,
    stock: 33
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
