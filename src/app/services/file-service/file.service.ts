import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private fileContent: string = '';

  constructor() { }

  createAndDownloadFile(fileName: string = 'Journal.txt'): void {
    const blob = new Blob([''], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  readJournal(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.fileContent = event.target.result;
        resolve(this.fileContent);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }

  getFileContent(): string {
    return this.fileContent;
  }

  writeEntry(date: string, entry: string): void {
    const entryMarker = `##${date}##`;
    const newEntry = `${entryMarker}\n${entry}\n`;
    
    if (this.fileContent.includes(entryMarker)) {
      const regex = new RegExp(`${entryMarker}[\\s\\S]*?(?=##|$)`);
      this.fileContent = this.fileContent.replace(regex, newEntry);
    } else {
      this.fileContent += `\n${newEntry}`;
    }
  }

  exportUpdatedJournal(fileName: string = 'Journal.txt'): void {
    const blob = new Blob([this.fileContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  clearContent(): void {
    this.fileContent = '';
  }
}
