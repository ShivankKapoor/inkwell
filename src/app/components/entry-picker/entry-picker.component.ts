import { Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-entry-picker',
  templateUrl: './entry-picker.component.html',
  styleUrl: './entry-picker.component.scss'
})
export class EntryPickerComponent {
  constructor(){}
}
