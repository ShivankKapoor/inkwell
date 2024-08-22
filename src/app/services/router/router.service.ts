import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private route: Router) { }

  public goToHome() {
    this.route.navigateByUrl("/")
  }

  public goToWriter() {
    this.route.navigateByUrl('/writer');
  }

  public goToStart() {
    this.route.navigateByUrl('/start');
  }

  public goToReader(){
    this.route.navigateByUrl('/reader')
  }
}

