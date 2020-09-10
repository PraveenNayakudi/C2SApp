import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegistrationComponent } from './admin/user-registration/user-registration.component';
import { MapComponent } from './admin/map/map.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'admin', component:AdminComponent, canActivate:[AuthGuardService],
  children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'user_reg', component:UserRegistrationComponent},
    {path:'map', component:MapComponent},
    {path:'reports',component:ReportsComponent}
  ]
},
  {path:'auth', component:AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
