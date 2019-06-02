import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  eventos:Observable<any[]>;

  constructor(private afDB: AngularFireDatabase) {
    console.log("tab2");
    // this.eventos = afDB.list('evento').valueChanges();    
  }

  ionViewDidEnter() {
    this.eventos = this.afDB.list('evento').valueChanges();    
    this.eventos.subscribe(data => {
      console.log("data", data);
    })
  }

}
