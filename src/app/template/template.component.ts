import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackService } from '../back.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  constructor(private _router: Router, private previousRouteService: BackService) { }


  ngOnInit(): void {
  }
  back() {
    this._router.navigate([this.previousRouteService.getPreviousUrl()])
  }

}