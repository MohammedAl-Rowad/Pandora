import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'pandora-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  user: any;
  constructor(
    private readonly genericService: GenericService,
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService
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
    this.genericService
      .genericGet(`projects/${projectIds.join(' , ')}/${this.user.accountId}`)
      .subscribe({
        next: console.log,
      });
  }
}
