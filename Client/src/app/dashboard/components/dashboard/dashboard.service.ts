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

  groupBy(data: any, mapper: any) {
    return data.reduce(
      (groupedObj, { fields }) => ({
        ...groupedObj,
        [mapper(fields)]: 1 + (+[groupedObj[mapper(fields)]] || 0),
      }),
      {}
    );
  }

  mapToCards(obj: { [key: string]: number }) {
    return Object.keys(obj).reduce(
      (arr, key) => [...arr, { name: key, value: obj[key] }],
      []
    );
  }

  private traversePages(API: string) {
    const data = [];
    const { ceil } = Math;
    return this.http.get(`${API}/data`);
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
