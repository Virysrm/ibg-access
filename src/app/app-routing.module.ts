import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SurveyComponent } from './views/survey/survey.component';
import { RegisterComponent } from './views/register/register.component';
import { ParticipantsComponent } from './views/participants/participants.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/registro', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, /* canActivate:[AuthGuard], */ children: [
    { path: 'participantes', component: ParticipantsComponent },
    { path: 'encuesta/:id', component: SurveyComponent },
  ]},
  { path: 'registro', component: RegisterComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
