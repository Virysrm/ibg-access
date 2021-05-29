import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { SurveyComponent } from './views/survey/survey.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { ParticipantsComponent } from './views/participants/participants.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'registro', component: HomeComponent },
  { path: 'participantes', component: ParticipantsComponent },
  { path: 'encuesta/:id', component: SurveyComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: '**', pathMatch: 'full', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
