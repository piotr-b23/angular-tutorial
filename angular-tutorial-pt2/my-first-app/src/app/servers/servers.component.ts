import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName: String = 'Testserver';
  username: String = '';
  isEmptyUsername: boolean = true;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = "server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }

  resetUserName(): void {
    this.username = '';
    this.isEmptyUsername = true;
  }

  chceckIsEmpty() :void {
    if(this.username) this.isEmptyUsername = false;
    else this.isEmptyUsername = true;
  }

}
