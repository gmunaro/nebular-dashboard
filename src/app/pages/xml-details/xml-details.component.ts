import { Component, OnInit } from '@angular/core';
import { XmlDetailsService } from '../shared/xml-details.service';

@Component({
  selector: 'app-xml-details',
  templateUrl: './xml-details.component.html',
  styleUrls: ['./xml-details.component.scss'] // Corrected property name to styleUrls
})
export class XmlDetailsComponent implements OnInit {
  items: any[] = []; // Array to hold items
  expandedItems: Set<number> = new Set(); // Set to track expanded items by index

  constructor(public service: XmlDetailsService) {}

  ngOnInit(): void {
    this.service.refreshList();
    this.items = this.service.list; // Assuming service.list contains the items
  }

  toggleContent(index: number) {
    if (this.expandedItems.has(index)) {
      this.expandedItems.delete(index); // Collapse if already expanded
    } else {
      this.expandedItems.add(index); // Expand if not already expanded
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedItems.has(index); // Check if the item is expanded
  }
}