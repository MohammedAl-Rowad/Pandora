import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'pandora-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  users: Array<any>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    const {
      users: { data: users },
    } = this.route.snapshot.data;
    this.users = users.reduce(
      (arr, { displayName, accountType, avatarUrls }) => {
        if (accountType !== 'app') {
          arr.push({
            displayName,
            avatarUrl: avatarUrls['48x48'],
          });
        }
        return arr;
      },
      []
    );
    this.spinner.hide();
  }
}
