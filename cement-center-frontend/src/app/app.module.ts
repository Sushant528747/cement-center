import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {UserAuthService} from "./services/user-auth.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./commons/routes";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UnAutherizedComponent } from './components/un-autherized/un-autherized.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import { ManageSalesComponent } from './components/manage-sales/manage-sales.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    UnAutherizedComponent,
    NavbarComponent,
    ManageUserComponent,
    ManageProfileComponent,
    ManageProductsComponent,
    ManageCustomersComponent,
    ManageSalesComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [UserAuthService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
