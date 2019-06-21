import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: `
    <p>
      parent works!
    </p>
    <p>Child Message: {{ appParentMessage }}</p>
    <hr />
    <app-child></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
  appParentMessage: string;
  @ViewChild(ChildComponent, { static: false }) child;

  constructor() {}

  ngAfterViewInit() {
    this.appParentMessage = this.child.appChildMessage;
  }
}
