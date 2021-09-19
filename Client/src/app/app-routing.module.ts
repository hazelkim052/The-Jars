import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HappinessComponent } from './component/happiness/happiness.component';
import { MotivateComponent } from './component/motivate/motivate.component';
import { SadComponent } from './component/sad/sad.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'happiness', component: HappinessComponent },
  { path: 'motivate', component: MotivateComponent },
  { path: 'sad', component: SadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
