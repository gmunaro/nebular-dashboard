import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { XmlDetails } from './xml-details.model';
import { XmlDetailsComponent } from '../xml-details/xml-details.component';

@Injectable({
  providedIn: 'root'
})
export class XmlDetailsService {
  url: string = environment.apiBaseUrl + '/XMLDetails';
  list: XmlDetails[] = [];
  formData: XmlDetails = new XmlDetails();

  constructor(private http: HttpClient) {}

  // Refresh List Method
  refreshList() {
    this.http.get(this.url).subscribe({
      next: (res) => {
        this.list = res as XmlDetails[];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // New Method to Upload XML
  uploadXml(xmlContent: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Parse the XML content to extract date
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');

    // Extracting dates from XML
    const dataReferencia = xmlDoc.getElementsByTagName('DataReferencia')[0]?.textContent;

    // Prepare payload for API
    const payload = {
      xmlId: 0,
      dataXml: dataReferencia || '',
      xmlContent: xmlContent,
    };

    return this.http.post(this.url, payload, { headers });
    
  }
}