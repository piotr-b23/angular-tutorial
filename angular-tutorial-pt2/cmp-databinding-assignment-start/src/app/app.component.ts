import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: Array<number> = [];
  evenNumbers: Array<number> = [];

  onIncrementEmit(emitedNumber: number) {
    if(emitedNumber % 2 === 0){
      this.evenNumbers.push(emitedNumber);
    }
    else {
      this.oddNumbers.push(emitedNumber);
    }

  }
}
