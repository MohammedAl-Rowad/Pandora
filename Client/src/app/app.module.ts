import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './components/home/home.component';
import { MatModule } from './modules/mat/mat.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule, MatModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
