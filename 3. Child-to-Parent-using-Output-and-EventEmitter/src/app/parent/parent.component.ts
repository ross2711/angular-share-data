import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor() { }

  appParentMessage: string;

  receiveMessage($event) {
    this.appParentMessage = $event
  }
}