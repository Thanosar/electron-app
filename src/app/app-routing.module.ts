import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CallComponent} from './calendar/calendar.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'calendar', component: CallComponent }
    ]
  },

  // App routes goes here here
  // {
  //   path: '',
  //   component: AppLayoutComponent,
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'profile', component: ProfileComponent }
  //   ]
  // },
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent },
  // // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
