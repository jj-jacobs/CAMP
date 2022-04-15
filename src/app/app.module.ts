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
import { MissionConfigComponent } from './mission-config/mission-config.component';
import { PlatformLibraryComponent } from './platform-library/platform-library.component';
import { ExistingPlatformsComponent } from './existing-platforms/existing-platforms.component';
import { MissionRoutingComponent } from './mission-routing/mission-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    WelcomeComponent,
    TemplateComponent,
    NewMissionPlanComponent,
    NewMissionTypeComponent,
    MissionConfigComponent,
    PlatformLibraryComponent,
    ExistingPlatformsComponent,
    MissionRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
