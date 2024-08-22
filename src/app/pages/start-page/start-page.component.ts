import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../../services/router/router.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  selectedFileName: string | null = null;

  constructor(public route: RouterService){}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
    }
  }

  submitFile(): void {
    if (this.selectedFileName) {
      console.log('Submitting file:', this.selectedFileName);
      // Add your file submission logic here
    }
  }
}
