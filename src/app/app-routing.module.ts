import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewMissionPlanComponent } from './new-mission-plan/new-mission-plan.component';
import { NewMissionTypeComponent } from './new-mission-type/new-mission-type.component';
import { MissionConfigComponent } from './mission-config/mission-config.component';
import { PlatformLibraryComponent } from './platform-library/platform-library.component';
import { ExistingPlatformsComponent } from './existing-platforms/existing-platforms.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent },
  {path: 'home', redirectTo: '/'},
  {path: 'login', component: LoginComponent },
  {path: 'welcome', component: WelcomeComponent },
  {path: 'newMissionPlan', component: NewMissionPlanComponent },
  {path: 'newMissionType', component: NewMissionTypeComponent },
  {path: 'missionConfig', component: MissionConfigComponent },
  {path: 'platformLibrary', component: PlatformLibraryComponent },
  {path: 'existingPlatforms', component: ExistingPlatformsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }