import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Test' , 'Test Service 2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;}, 
      2000);
  }

  ngOnInit(): void {
  }
  onCreateServer () {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created Name is' + this.serverName;
  }

  onUpdateServerName (event: any) {
    this.serverName = event.target.value;
  }
}
