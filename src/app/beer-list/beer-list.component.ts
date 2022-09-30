import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beer = {
    "nombre":"La negra",
    "Tipo":"Porter",
    "Precio":"$400",
    "IBU":"%24.5",
    "Stock":"107"
}
beer2 = {
  "nombre":"La Miel",
  "Tipo":"Honey",
  "Precio":"$420",
  "IBU":"%12.3",
  "Stock":"140"
}
beer3 = {
  "nombre":"la ger",
  "Tipo":"lager",
  "Precio":"$390",
  "IBU":"%11.3",
  "Stock":"138"
}
  constructor() { }

  ngOnInit(): void {
  }

}
