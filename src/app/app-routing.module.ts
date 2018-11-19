import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CallComponent} from './calendar/calendar.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'calendar',
    component: CallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
