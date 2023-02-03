import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs-compat';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  subscribtion: Subscription;
  constructor(private userService: UserService) {}
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  ngOnInit() {
    this.subscribtion = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    })
  }

  
}
