import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  selectedFileName: string | null = null;

  constructor(private router: Router){}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
    }
  }

  goToWriter(){
    console.log("Navigate to writer");
    this.router.navigateByUrl("/writer");
  }

  submitFile(): void {
    if (this.selectedFileName) {
      console.log('Submitting file:', this.selectedFileName);
      // Add your file submission logic here
    }
  }
}
