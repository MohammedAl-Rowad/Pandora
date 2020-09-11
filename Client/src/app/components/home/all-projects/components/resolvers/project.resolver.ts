import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/services/generic.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ProjectResolver implements Resolve<any> {
  constructor(
    private readonly genericService: GenericService,
    private readonly spinner: NgxSpinnerService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.spinner.show();
    const { id } = route.params;
    const [_, ids] = state.url.split('userIds=');
    return this.genericService
      .genericGet(`projects/${id}${ids ? `?userIds=${ids}` : ''}`)
      .pipe(
        tap((d) => {
          this.spinner.hide();
        })
      );
  }
}
