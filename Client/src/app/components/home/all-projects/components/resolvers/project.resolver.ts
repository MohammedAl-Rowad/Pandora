import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/services/generic.service';

@Injectable()
export class ProjectResolver implements Resolve<any> {
  constructor(private readonly genericService: GenericService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const { id } = route.params;
    return this.genericService.genericGet(`projects/${id}`);
  }
}
