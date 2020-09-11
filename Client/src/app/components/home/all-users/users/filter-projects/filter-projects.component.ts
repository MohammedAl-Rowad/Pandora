import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { allProjects } from 'src/types';

@Component({
  selector: 'pandora-filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.scss'],
})
export class FilterProjectsComponent implements OnInit {
  projects: Array<any> = [];
  selectedProjects = [];
  @Output() getData: EventEmitter<Array<string>>;

  constructor(private readonly genericService: GenericService) {
    this.getData = new EventEmitter<Array<string>>();
  }

  ngOnInit(): void {
    if (this.genericService.globals.projects) {
      this.projects = this.genericService.globals.projects.map(
        ({ id, name, avatarUrls }) => ({
          id,
          name,
          avatarUrl: avatarUrls['32x32'],
          project: allProjects,
        })
      );
    }
  }

  onChange(e): void {
    this.getData.emit(this.selectedProjects);
  }
}
