import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'pandora-all-epics',
  templateUrl: './all-epics.component.html',
  styleUrls: ['./all-epics.component.scss'],
})
export class AllEpicsComponent implements OnInit {
  epics: Array<any>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const {
      epics: { data: epics },
    } = this.route.snapshot.data;
    this.epics = epics.map(
      ({
        id,
        fields: {
          project: { avatarUrls },
          summary,
        },
      }) => ({
        summary,
        avatarUrl: avatarUrls['48x48'],
        id,
      })
    );
    this.spinner.hide();
  }
}
