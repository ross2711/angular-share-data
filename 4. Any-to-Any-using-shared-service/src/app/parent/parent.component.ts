import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  template: `
    <p>
      parent works!
    </p>
    <p>Message: {{ message }}</p>
    <button (click)="newMessage()" class="button">Send Message</button>
    <hr />
    <app-child></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message: string;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.message = message));
  }
  newMessage() {
    this.data.changeMessage('Hello from Parent');
  }
}
