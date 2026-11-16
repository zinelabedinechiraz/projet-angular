import { Component } from '@angular/core';
import { Header } from './sharedComponent/header/header';
import { Home } from './pages/home/home';
import { Footer } from './sharedComponent/footer/footer';
import { ListConf } from './pages/list-conf/list-conf';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Footer, ListConf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
