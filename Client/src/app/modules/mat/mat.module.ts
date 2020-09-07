import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatGridListModule, MatRippleModule, MatIconModule],
  exports: [MatGridListModule, MatRippleModule, MatIconModule],
})
export class MatModule {}
