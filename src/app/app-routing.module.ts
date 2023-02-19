import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AfterAuthGuard } from './guards/after-auth.guard';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },

  { path: 'login', component: LoginComponent, canActivate: [AfterAuthGuard] },

  {
    path: 'admin',
    component: HomeComponent,
    children: [
      {
        path: 'patients',
        component: PatientComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'patientAdd',
        component: AddPatientComponent,
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'patient/:id',
        component: ShowPatientComponent,
        canActivate: [AuthenticationGuard],
      },

      {
        path : '**',
        redirectTo :'/admin/patients',
        pathMatch :'full'
      },
    ],
    
  },

  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
