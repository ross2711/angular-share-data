import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>
      parent works!
    </p>
    <p>Received message: {{ appParentMessage }}</p>
    <hr />
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  appParentMessage: string;
  constructor() {}

  receiveMessage($event) {
    this.appParentMessage = $event;
  }
}
