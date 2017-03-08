import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Event } from './event';

@Injectable()
export class GitHubService {

  constructor(private http: Http) { }

  fetchGitHubData(repo: string): Observable<Array<Event>> {
    return this.http.get(`https://api.github.com/repos/${repo}/commits`).map(response => response.json());
  }

}
