import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackService } from '../back.service';
@Component({
  selector: 'app-platform-library',
  templateUrl: './platform-library.component.html',
  styleUrls: ['./platform-library.component.scss']
})
export class PlatformLibraryComponent implements OnInit {

  constructor(private _router: Router, private previousRouteService: BackService) { }


  ngOnInit(): void {
  }
  back() {
    this._router.navigate([this.previousRouteService.getPreviousUrl()])
  }
}
