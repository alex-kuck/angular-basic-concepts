import { Component, OnInit, Input } from '@angular/core';

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
  availableRepos = ['', 'awesome-inc/docker-elk-cyber', 'alex-kuck/angular-basic-concepts'];
  selectedRepo = '';

  constructor(private gitHubService: GitHubService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    if (this.selectedRepo) {
      this.gitHubEvents$ = this.gitHubService.fetchGitHubData(this.selectedRepo);
    } else {
      this.gitHubEvents$ = null;
    }
  }

  selectEvent(event) {
    this.selectedEvent = event;
  }

  deselectEvent() {
    this.selectedEvent = null;
  }

  @Input()
  set selectRepo(repo: string) {
    this.selectedRepo = repo === '' ? null : repo;
    this.selectedEvent = null;
    this.loadData();
  }

}
