import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  constructor() { }
  private changes: boolean = false

  setChangeStatus(status: boolean) {
    this.changes = status;
  }

  getChangeStatus() {
    return this.changes
  }

}
