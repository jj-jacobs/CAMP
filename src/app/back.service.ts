import { Injectable } from '@angular/core';
import { Router, NavigationEnd, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Location } from '@angular/common'

@Injectable()
export class BackService {

  private previousUrl: string = '';

  constructor(private router: Router, private location: Location) {
    
  }
  public getPreviousUrl() {
    return this.location.back();
  }
} 