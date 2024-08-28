import { Component, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-reader-picker',
  templateUrl: './reader-picker.component.html',
  styleUrls: ['./reader-picker.component.scss']
})
export class ReaderPickerComponent {
  @Input() availableDates: Date[] = [];

  dateFilter = (date: Date | null): boolean => {
    const dateString = date?.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
    return this.availableDates.some(availableDate => 
      availableDate.toISOString().split('T')[0] === dateString
    );
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    console.log('Selected date: ', event.value);
    // You can add additional logic here if needed
  }
}
