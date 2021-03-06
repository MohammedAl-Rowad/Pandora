import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/services/generic.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class EpicResolver implements Resolve<any> {
  constructor(
    private readonly genericService: GenericService,
    private readonly spinner: NgxSpinnerService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.spinner.show();
    return this.genericService.genericGet('epics');
  }
}
