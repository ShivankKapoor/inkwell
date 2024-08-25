import { Component } from '@angular/core';
import { RouterService } from '../../services/router/router.service';
import { FileService } from '../../services/file-service/file.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(public route:RouterService, private file:FileService) { }

  exit(){
    this.file.downloadFile();
    this.file.clearContent();
    this.route.goToStart()
    localStorage.removeItem('hasFile');
  }
}
