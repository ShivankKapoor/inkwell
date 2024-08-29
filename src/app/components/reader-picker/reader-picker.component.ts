import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-reader-picker',
  templateUrl: './reader-picker.component.html',
  styleUrls: ['./reader-picker.component.scss']
})
export class ReaderPickerComponent {
  @Output() dateSelected: EventEmitter<Date | undefined> = new EventEmitter<Date | undefined>();
  @Input() availableDates: Date[] = [];
  selectedDate: Date | null = null;
  
  dateFilter = (date: Date | null): boolean => {
    const dateString = date?.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
    return this.availableDates.some(availableDate =>
      availableDate.toISOString().split('T')[0] === dateString
    );
  }

  onDateChange(event: any): void {
    this.selectedDate = event.value;
    this.dateSelected.emit(this.selectedDate ?? undefined); // Emit undefined if selectedDate is null
  }
}
