import { Component } from '@angular/core';

@Component({
  selector: 'app-writer-page',
  templateUrl: './writer-page.component.html',
  styleUrls: ['./writer-page.component.scss']
})
export class WriterPageComponent {
  selectedDate: Date | undefined = undefined;
  outputString:string | undefined;
  onDateSelected(date: Date | undefined): void {
    this.selectedDate = date;

    if (this.selectedDate) {
      const dayNumber = this.selectedDate.getDay();
      const dayString = this.dayNumToDay(dayNumber);
      this.outputString = 
        dayString + ", " + 
        (this.selectedDate.getMonth() + 1) + "/" +
        this.selectedDate.getDate() + "/" + 
        this.selectedDate.getFullYear();

      console.log(this.outputString);
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
}
