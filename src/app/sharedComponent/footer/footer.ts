import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  // attributes
  year: number;
  subscribed: boolean;

  // constructor
  constructor() {
    this.year = new Date().getFullYear();
    this.subscribed = false;
  }

  // methods
  subscribe(email: string): void {
    if (email.includes('@')) {
      this.subscribed = true;
    }
  }
}
