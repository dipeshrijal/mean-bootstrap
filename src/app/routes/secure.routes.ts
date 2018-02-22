import {Routes} from '@angular/router';
import {DashboardComponent} from '../secure/dashboard/dashboard.component';
import {ProductComponent} from '../secure/product/product.component';
import {ProductCreateComponent} from '../secure/product/product-create/product-create.component';

export const SECURE_ROUTES: Routes = [
  {
    path: 'admin', children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {
        path: 'products', children: [
          {path: '', component: ProductComponent},
          {path: 'create', component: ProductCreateComponent}],
      }
    ]
  }
];
