import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HappinessComponent } from './component/happiness/happiness.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'happiness', component: HappinessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
