import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pandora-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  people: Array<any> = [];
  selectedPeople = [];

  constructor(
    private readonly genericService: GenericService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.userIds) {
        params.userIds.split(',').forEach((id: string) => {
          this.selectedPeople = [...this.selectedPeople, id];
        });
      }
    });
    if (this.genericService.globals.users) {
      this.people = this.genericService.globals.users.reduce(
        (arr, { accountId, avatarUrls, accountType, displayName, active }) => {
          if (accountType !== 'app' && active) {
            arr.push({
              id: accountId,
              avatarUrl: avatarUrls['48x48'],
              name: displayName,
            });
          }
          return arr;
        },
        []
      );
    }
  }

  onChange(e: any) {
    console.log(this.selectedPeople);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        userIds: this.selectedPeople.join(','),
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false,
      // do not trigger navigation
    });
  }
}
