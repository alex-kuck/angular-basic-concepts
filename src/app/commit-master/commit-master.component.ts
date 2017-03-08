import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { GitHubService } from '../model/git-hub.service';

import { Event } from '../model/event';

@Component({
  selector: 'app-commit-master',
  templateUrl: './commit-master.component.html',
  styleUrls: ['./commit-master.component.css']
})
export class CommitMasterComponent implements OnInit {

  gitHubEvents$: Observable<Array<Event>>;
  selectedEvent: Event = null;

  constructor(private gitHubService: GitHubService) { }

  ngOnInit() {
    this.gitHubEvents$ = this.gitHubService.fetchGitHubData();
  }

  selectEvent(event) {
    this.selectedEvent = event;
  }

}
