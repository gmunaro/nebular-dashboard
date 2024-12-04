import { Component } from '@angular/core';
import { XmlDetailsService } from '../../shared/xml-details.service';// Adjust path as necessar

@Component({
  selector: 'XmlDetailsFormComponent',
  template: `
    <div class="d-flex flex-column align-items-center">
      <input
        #file
        type="file"
        accept=".xml"
        style="display: none"
        (change)="submit(file.files)">
      <button 
        class="border px-4 py-3 rounded-3"
        (click)="file.click()">
        Importar XML
      </button>
    </div>
  `
})
export class XmlDetailsFormComponent {
  constructor(private xmlDetailsService: XmlDetailsService) {}

  submit(files: FileList | null) {
    if (!files || files.length === 0) return;

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const xmlContent = e.target?.result as string;

      // Call the service method to upload XML
      this.xmlDetailsService.uploadXml(xmlContent).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.xmlDetailsService.refreshList();
        },
        error: (error) => {
          console.error('Error:', error);
          // Handle error (e.g., show an error message)
        }
      });
    };
    fileReader.readAsText(files[0]);
  }
}