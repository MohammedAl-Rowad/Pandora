import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor(private readonly http: HttpClient) {}

  genericGet<T>(endPoint: string): Observable<T> {
    const { API } = environment;
    return this.http.get(`${API}/${endPoint}`) as Observable<T>;
  }
}
