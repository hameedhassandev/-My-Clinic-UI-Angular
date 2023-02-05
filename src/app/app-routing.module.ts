import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth-Components/login/login.component';
import { DoctorLayoutComponentComponent } from './Components/Doctor-Components/doctor-layout-component/doctor-layout-component.component';
import { AdminLayoutComponentComponent } from './Components/Admin-Components/admin-layout-component/admin-layout-component.component';
import { DepartmentComponent } from './Components/Admin-Components/department/department.component';
import { HospitalComponent } from './Components/Admin-Components/hospital/hospital.component';
import { AdminHomeComponent } from './Components/Admin-Components/Dashboard/admin-home/admin-home.component';
import { AdminDashboardComponent } from './Components/Admin-Components/Dashboard/admin-dashboard/admin-dashboard.component';
import { SpecialistComponent } from './Components/Admin-Components/specialist/specialist.component';
import { DoctorFiltersComponent } from './Components/Visitor-Component/doctor-filters/doctor-filters.component';
import { MainHomeComponent } from './Components/Visitor-Component/main-home/main-home.component';
import { HomeComponent } from './Components/Shared-Components/home/home.component';
import { DoctorComponent } from './Components/Shared-Components/doctor/doctor.component';
import { RegisterAsDoctorComponent } from './Components/Auth-Components/register-as-doctor/register-as-doctor.component';
import { ForgetPasswordComponent } from './Components/Auth-Components/forget-password/forget-password.component';
import { ConfirmationMailComponent } from './Components/Auth-Components/confirmation-mail/confirmation-mail.component';
import { DoctorDetailsComponent } from './Components/Shared-Components/doctor-details/doctor-details.component';
import { RegisterAsVisitorComponent } from './Components/Auth-Components/register-as-visitor/register-as-visitor.component';
import { ConfirmedDoctorsComponent } from './Components/Admin-Components/Dashboard/confirmed-doctors/confirmed-doctors.component';
import { NotConfirmedDoctorsComponent } from './Components/Admin-Components/Dashboard/not-confirmed-doctors/not-confirmed-doctors.component';
import { DoctorHomeComponent } from './Components/Doctor-Components/doctor-home/doctor-home.component';
import { RateAndReviewComponent } from './Components/Doctor-Components/rate-and-review/rate-and-review.component';
import { VisitorBookingComponent } from './Components/Doctor-Components/visitor-booking/visitor-booking.component';

const routes: Routes = [
  {path: '', component: MainHomeComponent, children:[
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'visitor-register', component:RegisterAsVisitorComponent},
    {path:'docotrs', component:DoctorComponent},
    {path:'docotr-register', component:RegisterAsDoctorComponent},
    {path:'multi-form', component:ForgetPasswordComponent},
    {path:'confirm-email', component:ConfirmationMailComponent},
    {path:'home/all-doctors', component:DoctorFiltersComponent},
    {path:'home/doctor-details/:doctorId', component:DoctorDetailsComponent},
    

  ]},

  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminLayoutComponentComponent,
  children: [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:AdminHomeComponent},
    {path:'admin-dashboard', component:AdminDashboardComponent},
    {path:'department', component:DepartmentComponent},
    {path:'hospital', component:HospitalComponent},
    {path:'specialist', component:SpecialistComponent},
    {path:'confirmed-doctors', component:ConfirmedDoctorsComponent},
    {path:'not-confirmed-doctors', component:NotConfirmedDoctorsComponent},
    

  ]},
  {path:'doctor', component:DoctorLayoutComponentComponent,
  children: [
    {path:'', redirectTo:'profile', pathMatch:'full'},
    {path:'profile', component:DoctorHomeComponent},
    {path:'rate-and-review', component:RateAndReviewComponent},
    {path:'visitor-booking', component:VisitorBookingComponent},
    ]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
