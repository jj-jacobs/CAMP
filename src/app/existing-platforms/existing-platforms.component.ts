import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackService } from '../back.service';
@Component({
  selector: 'app-existing-platforms',
  templateUrl: './existing-platforms.component.html',
  styleUrls: ['./existing-platforms.component.scss']
})
export class ExistingPlatformsComponent implements OnInit {

  constructor(private _router: Router, private previousRouteService: BackService) { }


  ngOnInit(): void {
  }
  back() {
    this._router.navigate([this.previousRouteService.getPreviousUrl()])
  }

}
