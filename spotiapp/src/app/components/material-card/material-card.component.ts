import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styles: []
})
export class MaterialCardComponent implements OnInit {

  @Input()
  material:any;
  
  constructor() { }

  ngOnInit() {
  }

}
