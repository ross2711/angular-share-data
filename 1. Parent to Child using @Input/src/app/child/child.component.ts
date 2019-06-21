import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
    <p>Message from parent: {{ appChildMessage }}</p>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() appChildMessage: string;

  constructor() {}

  ngOnInit() {}
}
