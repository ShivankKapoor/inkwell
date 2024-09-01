import { Component, HostListener } from '@angular/core';
import { ChangeService } from './services/change-service/change.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inkwell';

  constructor(private change:ChangeService){}

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.change.getChangeStatus()) {
      $event.returnValue = 'You have unsaved changes! Are you sure you want to leave?';
    }
  }
}
