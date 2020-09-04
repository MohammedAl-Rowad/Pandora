import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable()
export class DashboardService {
  constructor(private readonly http: HttpClient) {}

  get() {
    const { API, API_KEY, username } = environment;
    return this.traversePages(API, this.basicAuth(username, API_KEY));
  }

  private traversePages(API: string, headers: { headers: HttpHeaders }) {
    const data = [];
    const { ceil } = Math;
    console.log;
    return this.http
      .get(
        `${API}/search?jql=assignee=5a69b5b8031a591456af4307&maxResults=100`,
        { ...headers }
      )
      .subscribe({
        next(response) {
          console.log(ceil);
        },
        error() {
          alert('Plz refresh the page, something went wrong');
        },
      });
  }

  private basicAuth(
    username: string,
    password: string
  ): { headers: HttpHeaders } {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));
    return { headers };
  }
}
