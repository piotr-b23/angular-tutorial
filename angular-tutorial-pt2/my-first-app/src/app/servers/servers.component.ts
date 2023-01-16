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
  serverCreated: boolean = false;
  servers: Array<String>= ['Testserver 1', 'Testserver 2', 'Testserver 3'];
  buttonClicked = false;

  clickRecord: Array<String> = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = "server was created! Name is " + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
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

  recordClick() : void {
    console.log(Date.now().toString());
    this.clickRecord.push(Date.now().toString());
  }

  isBiggerThanFive(input: Number) : boolean {
  if (input > 3) return true;
  else return false;
  }

  getColor(input: Number) : string {
    if (input > 3) return 'blue';
    else return 'none';
  }

}
