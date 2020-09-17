import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { allProjects } from 'src/types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'pandora-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  user: any;
  obj: any;

  constructor(
    private readonly genericService: GenericService,
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: ({ id }) => {
        this.user = this.genericService.globals.users.filter(
          ({ accountId }) => id === accountId
        )[0];
        this.spinner.hide();
      },
    });
  }

  getData(projectIds: Array<string>): void {
    if (projectIds.length !== 0) {
      this.spinner.show();
      const joined = projectIds.join(' , ');
      this.genericService
        .genericGet(
          `projects/${joined === allProjects ? 'all' : joined}/${
            this.user.accountId
          }`
        )
        .subscribe({
          next: ({ data, total }) => {
            this.spinner.hide();
            this.obj = null;
            setTimeout(() => {
              this.obj = { issues: data, total };
            }, 0);
          },
        });
    } else {
      this.obj = null;
    }
  }
}
