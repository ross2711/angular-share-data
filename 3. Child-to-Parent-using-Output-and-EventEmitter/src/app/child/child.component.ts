import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor() { }

  @Output() messageEvent = new EventEmitter<string>();
  message: string = "I am calling from Child Component!"

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}