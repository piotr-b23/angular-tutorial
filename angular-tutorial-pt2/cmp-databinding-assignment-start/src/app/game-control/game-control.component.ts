import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

 @Output() incrementingNumberEmit = new EventEmitter<number>();
  incrementingNumber: number = 0;
  incrementingInterval;


  constructor() { }

  ngOnInit(): void {
  }

  startIncrementing() {
    this.incrementingInterval = setInterval(() => {
      this.incrementingNumberEmit.emit(this.incrementingNumber);
      this.incrementingNumber = this.incrementingNumber + 1;

    }, 1000);
  }

  stopIncrementing() {
    clearInterval(this.incrementingInterval);
  }

}
