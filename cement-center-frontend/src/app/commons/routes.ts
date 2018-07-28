import {Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {LoginComponent} from '../components/login/login.component';
import {PageNotFoundComponent} from "../components/page-not-found/page-not-found.component";
import {UnAutherizedComponent} from "../components/un-autherized/un-autherized.component";
import {ManageProductsComponent} from "../components/manage-products/manage-products.component";
import {ManageProfileComponent} from "../components/manage-profile/manage-profile.component";
import {ManageSalesComponent} from "../components/manage-sales/manage-sales.component";
import {ManageUserComponent} from "../components/manage-user/manage-user.component";
import {ManageCustomersComponent} from "../components/manage-customers/manage-customers.component";

export const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'products', component: ManageProductsComponent},
      {path: 'profile', component: ManageProfileComponent},
      {path: 'sales', component: ManageSalesComponent},
      {path: 'users', component: ManageUserComponent},
      {path: 'customers', component: ManageCustomersComponent}
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  },
  {
    path: 'unautherized', component: UnAutherizedComponent
  }
];
