import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackService } from '../back.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private previousRoute: BackService) { }

  ngOnInit(): void {

  }
  login(){
    this._router.navigate(['/welcome']);
  }
  back(){
    this._router.navigate([this.previousRoute.getPreviousUrl()])
  }

}
