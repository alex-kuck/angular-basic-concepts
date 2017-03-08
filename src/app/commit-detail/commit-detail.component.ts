import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Event } from '../model/event';

@Component({
  selector: 'app-commit-detail',
  templateUrl: './commit-detail.component.html',
  styleUrls: ['./commit-detail.component.css']
})
export class CommitDetailComponent implements OnInit {

  @Input() event: Event;
  @Output() deselect = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  deselectClicked() {
    this.deselect.emit(true);
  }

}
