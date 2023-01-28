import { AfterViewChecked, Component, DoCheck, OnChanges } from '@angular/core';
import { CounterService } from './counter.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  count: number = 0;

  constructor(private counterService: CounterService) {}


  ngDoCheck(){
    this.count = this.counterService.count;
  }
}
