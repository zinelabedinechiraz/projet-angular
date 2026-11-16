import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  // attributes
  title: string;
  state: boolean;

  // constructor
  constructor() {
    this.title = 'Home 4DAS 10';
    this.state = false;
  }

  // methods
  ngOnInit(): void {}

  change(): void {
    this.title = 'Home 4DAS 9';
    this.state = true;
  }
}
