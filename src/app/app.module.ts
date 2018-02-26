import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterService} from './auth/register/register.service';
import {PublicComponent} from './public/public.component';
import {SecureComponent} from './secure/secure.component';
import {SecureModule} from './secure/secure.module';
import {PublicModule} from './public/public.module';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicComponent,
    SecureComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SecureModule,
    PublicModule
  ],
  providers: [
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
