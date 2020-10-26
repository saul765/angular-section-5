import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IServer, Server} from '../model/Server';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<IServer>();
  @Output() blueprintCreated = new EventEmitter<IServer>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit(new Server(this.newServerName, this.newServerContent));
  }

  onAddServer2(nameInput: HTMLInputElement) {
    this.serverCreated.emit(new Server(nameInput.value, this.newServerContent));
  }

  onAddServerViewChild(nameInput: HTMLInputElement) {
    this.serverCreated.emit(new Server(nameInput.value, this.serverContentInput.nativeElement.value));
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(new Server(this.newServerName, this.newServerContent));
  }

  onAddBlueprint2(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit(new Server(nameInput.value, this.newServerContent));
  }

  onAddBlueprintViewChild(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit(new Server(nameInput.value, this.serverContentInput.nativeElement.value));
  }
}
