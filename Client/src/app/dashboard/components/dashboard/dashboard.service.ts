import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable()
export class DashboardService {
  constructor(private readonly http: HttpClient) {}

  get() {
    const { API } = environment;
    return this.traversePages(API);
  }

  private traversePages(API: string) {
    const data = [];
    const { ceil } = Math;
    console.log;
    return this.http.get(`${API}`).subscribe({
      next(response) {
        console.log(response);
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
