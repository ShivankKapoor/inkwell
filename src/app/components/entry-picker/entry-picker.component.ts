import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-entry-picker',
  templateUrl: './entry-picker.component.html',
  styleUrls: ['./entry-picker.component.scss']
})
export class EntryPickerComponent {
  @Output() dateSelected: EventEmitter<Date | undefined> = new EventEmitter<Date | undefined>();
  selectedDate: Date | null = null;

  constructor() {}

  onDateChange(event: any): void {
    this.selectedDate = event.value;
    this.dateSelected.emit(this.selectedDate ?? undefined); // Emit undefined if selectedDate is null
  }
}
