import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: []
})
export class NgClassComponent implements OnInit {
  claseAlerta: string = "";
  claseAlertaSuccess: string = "alert alert-success";
  claseAlertaDanger: string = "alert alert-danger";
  toggle: boolean = true;


  loading: boolean = false;

  constructor() {
    this.claseAlerta = this.claseAlertaSuccess;
  }

  ngOnInit() {
  }

  cambiarEstilo() {
    if (this.toggle) {
      this.claseAlerta = this.claseAlertaDanger;
    } else {
      this.claseAlerta = this.claseAlertaSuccess;
    }

    this.toggle = !this.toggle;
  }


  ejecutar() {
    this.loading = true;
    setTimeout(
      () => {
        this.loading = false;
      }, 5000
    );
  }

}
