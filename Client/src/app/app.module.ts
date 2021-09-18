import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HappinessComponent } from './happiness/happiness.component';

import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: HomeComponent },
  { path: '/happiness', component: HappinessComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, HappinessComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
