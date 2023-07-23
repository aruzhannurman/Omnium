import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-content-info',
  templateUrl: './content-dashboard.component.html',
  styleUrls: ['./content-dashboard.component.scss'],
})
export class InfoComponent {
  title: string =
    'Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond.';
  maxTitleLength: number = 5; // Change this value to your desired maximum length for the title

  description: string =
    'Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond.  iOS, watchOS, tvOS and beyond.';
  maxDescriptionLength: number = 100; // Change this value to your desired maximum length for the description

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  getLimitedTitle(): string {
    if (this.title.length > this.maxTitleLength) {
      return this.title.substr(0, this.maxTitleLength) + '...';
    }
    return this.title;
  }

  getLimitedDescription(): string {
    if (this.description.length > this.maxDescriptionLength) {
      return this.description.substr(0, this.maxDescriptionLength) + '...';
    }
    return this.description;


    
  }
}






