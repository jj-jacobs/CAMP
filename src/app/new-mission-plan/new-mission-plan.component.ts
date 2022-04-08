import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackService } from '../back.service';
@Component({
  selector: 'app-new-mission-plan',
  templateUrl: './new-mission-plan.component.html',
  styleUrls: ['./new-mission-plan.component.scss']
})
export class NewMissionPlanComponent implements OnInit {
  previousUrl: string = '';
  currentUrl: string = '';
  constructor(private _router: Router, private previousRouteService: BackService) {}
  

  ngOnInit(): void {
  }
  submitMission(){
    this._router.navigate(['/newMissionType'])
  }
  back(){
    this._router.navigate([this.previousRouteService.getPreviousUrl()]) 
  }

}
