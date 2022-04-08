import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BackService } from '../back.service';
@Component({
  selector: 'app-new-mission-type',
  templateUrl: './new-mission-type.component.html',
  styleUrls: ['./new-mission-type.component.scss']
})
export class NewMissionTypeComponent implements OnInit {
  previousUrl: string = '';
  currentUrl: string = '';
  constructor(private _router: Router, private previousRouteService: BackService) {}
  
  ngOnInit() {
  }
  back(){
    this._router.navigate([this.previousRouteService.getPreviousUrl()])
  }

}
