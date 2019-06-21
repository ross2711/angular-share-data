import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
    <p>Message to parent: {{ appChildMessage }}</p>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  appChildMessage = 'This message is from child to parent';

  constructor() {}

  ngOnInit() {}
}
