import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>
      parent works!
    </p>
    <hr />
    <app-child [appChildMessage]="appParentMessage"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public appParentMessage = 'hello';

  constructor() {}

  ngOnInit() {}
}
