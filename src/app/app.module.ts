import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TemplateComponent } from './template/template.component';
import { NewMissionPlanComponent } from './new-mission-plan/new-mission-plan.component';
import { NewMissionTypeComponent } from './new-mission-type/new-mission-type.component';
import { BackService } from './back.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    WelcomeComponent,
    TemplateComponent,
    NewMissionPlanComponent,
    NewMissionTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
