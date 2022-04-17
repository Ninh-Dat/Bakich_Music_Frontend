import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { MasterComponent } from './page/master/master.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import {HomeComponent} from './page/home/home.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './page/nav/nav.component';
import { FooterComponent } from './page/footer/footer.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';


@NgModule({
    declarations: [
        AppComponent,
        MasterComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        UserDetailComponent,
        UserEditComponent,
        NavComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbDropdownModule,
    ],
    providers: [],
  exports: [
    NavComponent,
    FooterComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
