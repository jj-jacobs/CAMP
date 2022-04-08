import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackService } from '../back.service';
@Component({
  selector: 'app-mission-config',
  templateUrl: './mission-config.component.html',
  styleUrls: ['./mission-config.component.scss']
})
export class MissionConfigComponent implements OnInit {

  constructor(private _router: Router, private previousRouteService: BackService) { }


  ngOnInit(): void {
  }
  submitMission() {
    this._router.navigate(['/newMissionType'])
  }
  back() {
    this._router.navigate([this.previousRouteService.getPreviousUrl()])
  }

}
