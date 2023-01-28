import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  onSetToActive(id: number) {
    this.userSerivice.onSetToActive(id);
  }
  constructor(private userSerivice: UsersService) {}

  ngOnInit(){
    this.users = this.userSerivice.inactiveUsers;
  }
}
