import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName: String = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = "server was created";
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
