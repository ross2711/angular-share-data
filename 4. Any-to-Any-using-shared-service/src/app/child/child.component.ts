import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
    Message: {{ message }}
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message: string;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.message = message));
  }
}
