import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {PublicComponent} from './public/public.component';
import {SecureComponent} from './secure/secure.component';
import {PUBLIC_ROUTES} from './routes/public.routes';
import {SECURE_ROUTES} from './routes/secure.routes';
import {RegisterComponent} from './auth/register/register.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '', component: PublicComponent,
    data: {title: 'Public Views'}, children: PUBLIC_ROUTES
  },
  {
    path: '', component: SecureComponent,
    data: {title: 'Secure Views'}, children: SECURE_ROUTES
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
