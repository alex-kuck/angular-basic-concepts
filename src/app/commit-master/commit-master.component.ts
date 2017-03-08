import { Component, OnInit } from '@angular/core';

import { GitHubService } from '../model/git-hub.service';

import { Event } from '../model/event';

@Component({
  selector: 'app-commit-master',
  templateUrl: './commit-master.component.html',
  styleUrls: ['./commit-master.component.css']
})
export class CommitMasterComponent implements OnInit {

  constructor(private gitHubService: GitHubService) { }

  ngOnInit() {
  }

}
