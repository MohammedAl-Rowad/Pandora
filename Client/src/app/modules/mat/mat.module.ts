import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [MatGridListModule, MatRippleModule, MatIconModule, MatCardModule],
  exports: [MatGridListModule, MatRippleModule, MatIconModule, MatCardModule],
})
export class MatModule {}
