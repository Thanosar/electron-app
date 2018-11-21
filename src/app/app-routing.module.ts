import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CallComponent} from './calendar/calendar.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
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
