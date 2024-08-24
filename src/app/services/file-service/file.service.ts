import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private fileContent: string = ''; // Stores the entire content of the journal
  private entriesMap: Map<string, string> = new Map(); // Stores each entry with its corresponding date as the key

  constructor() { }

  createAndDownloadFile(fileName: string = 'Journal.txt'): void {
    const blob = new Blob([''], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  downloadFile(): void {
    const blob = new Blob([this.getFileContent()], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "Journal.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  readJournal(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.fileContent = event.target.result;
        this.parseEntries(); // Parse the file content to populate the hash map
        resolve(this.fileContent);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }

  private parseEntries(): void {
    const entryPattern = /##(\d{4}-\d{2}-\d{2})##\s*([\s\S]*?)(?=##|$)/g;
    let match;

    this.entriesMap.clear(); // Clear existing entries in the hash map before adding new ones

    while ((match = entryPattern.exec(this.fileContent)) !== null) {
      const date = match[1]; // The date portion of the entry
      const entry = match[2].trim(); // The entry text, trimmed of excess whitespace
      this.entriesMap.set(date, entry); // Store the entry in the hash map
    }
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

    // Update the hash map with the new entry
    this.entriesMap.set(date, entry);
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
    this.entriesMap.clear(); // Clear the hash map as well
  }

  // Getter method to access the hash map outside of the service
  getEntriesMap(): Map<string, string> {
    return this.entriesMap;
  }

  getEntry(date: string): string | undefined {
    return (this.entriesMap.get(date));
  }
}
