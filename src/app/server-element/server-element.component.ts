import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IServerElement} from '../model/ServerElement';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input() element: IServerElement;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('on init called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanged called');
  }

}
