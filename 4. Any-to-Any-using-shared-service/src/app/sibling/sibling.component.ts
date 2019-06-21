import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling',
  template: `
    <p>
      sibling works!
    </p>
    Message: {{ message }}
  `,
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  message: string;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.message = message));
  }
}
