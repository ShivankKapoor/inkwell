import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  constructor() { }
  private changes: boolean = true

  setChangeStatus(status: boolean) {
    this.changes = status;
  }

  getChangeStatus() {
    return this.changes
  }

}
