import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FileService } from '../services/file-service/file.service';
import { constants } from '../environments/constants.env';

@Injectable({
  providedIn: 'root'
})
export class fileImportGuard implements CanActivate {

  constructor(private router: Router, private fileS:FileService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!constants.enforceRoutingGuard){
      return true; 
    }
    if (localStorage.getItem('hasFile')&&this.fileS.getFileContent()!="") {
      return true;
    } else {
      this.router.navigate(['/start']);
      return false;
    }
  }
}
