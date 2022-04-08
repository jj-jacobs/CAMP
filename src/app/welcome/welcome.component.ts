import { Component, OnInit } from '@angular/core';
import { BackService } from '../back.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private previousRouteService: BackService, private _router: Router) { }

  ngOnInit(): void {
  }
  back(){
    this._router.navigate([this.previousRouteService.getPreviousUrl()])
  }
}
