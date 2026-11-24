import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './sharedcomponent/header/header';
import { Home } from './pages/home/home';
import { Footer } from './sharedcomponent/footer/footer';
import { ListCof } from './pages/list-cof/list-cof';
import { Navbar } from './sharedcomponent/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header , Navbar , Home , Footer, ListCof],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Projet');
}
