import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'pandora-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  users: Array<any>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const {
      users: { data: users },
    } = this.route.snapshot.data;
    this.users = users.reduce(
      (arr, { displayName, accountType, avatarUrls, active, accountId }) => {
        if (accountType !== 'app' && active) {
          arr.push({
            displayName,
            avatarUrl: avatarUrls['48x48'],
            accountId,
          });
        }
        return arr;
      },
      []
    );
    this.spinner.hide();
  }
}
