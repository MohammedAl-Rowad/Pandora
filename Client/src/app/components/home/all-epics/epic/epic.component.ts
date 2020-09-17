import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'pandora-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss'],
})
export class EpicComponent implements OnInit {
  epic: any;
  constructor(
    private readonly genericService: GenericService,
    private readonly route: ActivatedRoute,
    private readonly spinner: NgxSpinnerService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
}
