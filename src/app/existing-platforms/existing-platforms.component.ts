import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackService } from '../back.service';
@Component({
  selector: 'app-existing-platforms',
  templateUrl: './existing-platforms.component.html',
  styleUrls: ['./existing-platforms.component.scss']
})
export class ExistingPlatformsComponent implements OnInit {
  drones:Array<any> = ['MQ-1 Predator','MQ-4C Triton','MQ-8 Fire Scout','MQ-9 Reaper','MQ-20 Avenger','RQ-7 Shadow','RQ-11 Raven','RQ-12 Wasp','RQ-20 Puma','RQ-21 Blackjack','RQ-170 Sentinel','X-47B Pegasus']
  constructor(private _router: Router, private previousRouteService: BackService) { }
  ngOnInit(): void {
  }
  back() {
    this._router.navigate([this.previousRouteService.getPreviousUrl()])
  }

}
