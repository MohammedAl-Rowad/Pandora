import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericService } from 'src/app/services/generic.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class UsersResolver implements Resolve<any> {
  constructor(
    private readonly genericService: GenericService,
    private readonly spinner: NgxSpinnerService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.spinner.show();
    const { users } = this.genericService.globals;
    return users ? { data: users } : this.genericService.genericGet('users');
  }
}
