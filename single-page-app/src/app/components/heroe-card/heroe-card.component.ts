import { Component, OnInit, Input } from '@angular/core';

import { Heroe } from "../../services/heroes.service";
@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: []
})
export class HeroeCardComponent implements OnInit {

  @Input()
  heroe:Heroe;

  @Input()
  i:number = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
