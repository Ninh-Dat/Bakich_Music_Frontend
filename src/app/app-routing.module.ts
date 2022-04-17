import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {MasterComponent} from './page/master/master.component';
import {LoginComponent} from './page/login/login.component';
import {RegisterComponent} from './page/register/register.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {NavComponent} from './page/nav/nav.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'master',
    component: MasterComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'users/:id/detail',
    component: UserDetailComponent,
  },
  {
    path:'users/:id/update',
    component: UserEditComponent,
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
