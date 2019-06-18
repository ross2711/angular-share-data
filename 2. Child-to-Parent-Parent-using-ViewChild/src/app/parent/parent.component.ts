import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent) child;

  appParentMessage: string;

  constructor() { }

  ngAfterViewInit() {
    this.appParentMessage = this.child.appChildMessage;
  }
}