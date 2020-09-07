import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericService } from 'src/app/services/generic.service';

@Injectable()
export class UsersResolver implements Resolve<any> {
  constructor(private readonly genericService: GenericService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const { API } = environment;
    return this.genericService.genericGet('users');
  }
}
