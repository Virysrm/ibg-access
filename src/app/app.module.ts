import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxBootstrapModule } from './externalModules/ngx-bootstrap.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common'
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { SurveyComponent } from './views/survey/survey.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { ParticipantsComponent } from './views/participants/participants.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SurveyComponent,
    RegisterComponent,
    HomeComponent,
    ParticipantsComponent,
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxBootstrapModule,
    ReactiveFormsModule,
  ],
  entryComponents: [],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
