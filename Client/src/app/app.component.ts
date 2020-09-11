import { Component, OnInit } from '@angular/core';
import { GenericService } from './services/generic.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'panadora-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly genericService: GenericService) {}

  ngOnInit(): void {
    this.genericService
      .genericGet('users')
      .pipe(
        switchMap(({ data }) => {
          this.genericService.globals.users = data;
          return this.genericService.genericGet('projects');
        })
      )
      .subscribe({
        next: (data) => {
          this.genericService.globals.projects = data;
        },
      });
  }
}
