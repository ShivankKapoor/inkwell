import { Component } from '@angular/core';
import { RouterService } from '../../services/router/router.service';
import { FileService } from '../../services/file-service/file.service';

@Component({
  selector: 'app-writer-page',
  templateUrl: './writer-page.component.html',
  styleUrls: ['./writer-page.component.scss']
})
export class WriterPageComponent {

  textContent: string|undefined = '';
  selectedDate: Date | undefined = undefined;
  outputString: string | undefined;
  isEnabled: boolean = false;

  constructor(public route: RouterService, private fileService: FileService) { }

  clearText() {
    this.textContent = '';
  }

  onDateSelected(date: Date | undefined): void {
    this.selectedDate = date;
    if (this.selectedDate) {
      this.isEnabled = true;
      const dayNumber = this.selectedDate.getDay();
      const dayString = this.dayNumToDay(dayNumber);
      this.outputString =
        dayString + ", " +
        (this.selectedDate.getMonth() + 1) + "/" +
        this.selectedDate.getDate() + "/" +
        this.selectedDate.getFullYear();
      this.textContent=this.fileService.getEntry(this.selectedDate.toDateString());
      console.log(this.selectedDate.toString());
      console.log(this.fileService.getEntry(this.selectedDate.toDateString()));
    } else {
      this.outputString = "";
      this.isEnabled = false;
    }
  }

  private dayNumToDay(num: number): string {
    let dayString: string;
    switch (num) {
      case 0:
        dayString = 'Sunday';
        break;
      case 1:
        dayString = 'Monday';
        break;
      case 2:
        dayString = 'Tuesday';
        break;
      case 3:
        dayString = 'Wednesday';
        break;
      case 4:
        dayString = 'Thursday';
        break;
      case 5:
        dayString = 'Friday';
        break;
      case 6:
        dayString = 'Saturday';
        break;
      default:
        dayString = 'Unknown';
    }
    return dayString;
  }

  saveEntry(): void {
    if (this.selectedDate && this.textContent) {
      this.fileService.writeEntry(this.selectedDate.toDateString(), this.textContent);
    }

    console.log(this.fileService.getEntriesMap());
    console.log(this.fileService.getFileContent());
  }
}
