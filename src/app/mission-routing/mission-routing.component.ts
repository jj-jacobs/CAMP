import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackService } from '../back.service';
@Component({
  selector: 'app-mission-routing',
  templateUrl: './mission-routing.component.html',
  styleUrls: ['./mission-routing.component.scss']
})
export class MissionRoutingComponent implements OnInit {
  waypoints:any = [1,2,3,4,5]
  constructor(private _router: Router, private previousRouteService: BackService) { }

  ngOnInit(): void {
  }
  back() {
    this._router.navigate([this.previousRouteService.getPreviousUrl()])
  }
  submitMission(){
    console.log('submitting mission')
  }
}