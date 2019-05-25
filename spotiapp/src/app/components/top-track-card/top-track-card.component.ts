import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-track-card',
  templateUrl: './top-track-card.component.html',
  styles: []
})
export class TopTrackCardComponent implements OnInit {

  @Input()
  topTrack:any;

  constructor() { }

  ngOnInit() {
  }

}
