import {Component} from '@angular/core';
import {ServerElement} from './model/ServerElement';
import {IServer} from './model/Server';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElement[] = [new ServerElement('server', 'name', 'content')];

  constructor() {
  }

  onServerAdded(serverData: IServer) {
    this.serverElements.push(new ServerElement('server', serverData.serverName, serverData.serverContent));
  }

  onBlueprintAdded(blueprintData: IServer) {
    this.serverElements.push(new ServerElement('blueprint', blueprintData.serverName, blueprintData.serverContent));

  }


}
