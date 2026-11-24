import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './sharedComponent/header/header';
import { Footer } from './sharedComponent/footer/footer';
import { Navbar } from './sharedComponent/navbar/navbar';

import { Home } from './pages/home/home';

import { ListCof } from './pages/list-cof/list-cof';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header , Navbar , Home , Footer, ListCof],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Projet');
}
