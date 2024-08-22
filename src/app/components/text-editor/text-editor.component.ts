import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {
  @Input() enabled!:boolean; 
  
  textContent: string = '';

  constructor() {}

  clearText() {
    this.textContent = '';
  }
}
