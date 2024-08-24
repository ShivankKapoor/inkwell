import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../../services/router/router.service';
import { FileService } from '../../services/file-service/file.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  selectedFileName: string | null = null;

  constructor(public route: RouterService, private files:FileService){}

  ngOnInit(){
    localStorage.removeItem('hasFile');
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
      localStorage.setItem('hasFile','true');
      this.files.readJournal(file);
    }
  }

  newJournal(){
    this.files.createAndDownloadFile();
    //localStorage.setItem('hasFile','true');
    //this.route.goToWriter();
  }


  submitFile(): void {
    if (this.selectedFileName) {
      console.log('Submitting file:', this.selectedFileName);
      localStorage.setItem('hasFile','true');
      this.route.goToHome();
    }
  }
}
