import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-list-conf',
  imports: [DatePipe, FormsModule],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf implements OnInit {
  // attributes
  title: string;
  conferences: Conference[];
  search: string;
  onlyAvailable: boolean;
  message: string;

  // constructor
  constructor() {
    this.title = 'Nos conférences';
    this.conferences = [];
    this.search = '';
    this.onlyAvailable = false;
    this.message = '';
  }

  // methods
  ngOnInit(): void {
    this.conferences = [
      {
        id: 1,
        title: 'Angular Summit 2026',
        picture: 'https://picsum.photos/seed/angular/400/250',
        date: new Date('2026-12-05'),
        address: 'Cité de la Culture, Tunis',
        available: true,
        places: 120,
      },
      {
        id: 2,
        title: 'AI & Data Day',
        picture: 'https://picsum.photos/seed/data/400/250',
        date: new Date('2026-12-18'),
        address: 'Technopole, Sousse',
        available: true,
        places: 45,
      },
      {
        id: 3,
        title: 'Cyber Security Forum',
        picture: 'https://picsum.photos/seed/cyber/400/250',
        date: new Date('2027-01-10'),
        address: 'Palais des Congrès, Tunis',
        available: false,
        places: 0,
      },
      {
        id: 4,
        title: 'Web Dev Meetup',
        picture: 'https://picsum.photos/seed/webdev/400/250',
        date: new Date('2027-01-24'),
        address: 'ESPRIT, Ariana',
        available: true,
        places: 3,
      },
      {
        id: 5,
        title: 'Cloud & DevOps Days',
        picture: 'https://picsum.photos/seed/cloud/400/250',
        date: new Date('2027-02-08'),
        address: 'Hôtel Mövenpick, Sousse',
        available: true,
        places: 60,
      },
      {
        id: 6,
        title: 'Mobile Dev Conference',
        picture: 'https://picsum.photos/seed/mobile/400/250',
        date: new Date('2027-02-21'),
        address: 'Centre des Congrès, Sfax',
        available: true,
        places: 8,
      },
      {
        id: 7,
        title: 'UX / UI Design Week',
        picture: 'https://picsum.photos/seed/design/400/250',
        date: new Date('2027-03-04'),
        address: 'Lac 2, Tunis',
        available: false,
        places: 0,
      },
      {
        id: 8,
        title: 'Startup & Innovation Forum',
        picture: 'https://picsum.photos/seed/startup/400/250',
        date: new Date('2027-03-19'),
        address: 'Marina, Monastir',
        available: true,
        places: 75,
      },
    ];
  }

  // Liste affichée : filtrée par la recherche et par "disponibles seulement"
  get filteredConferences(): Conference[] {
    const text = this.search.trim().toLowerCase();
    return this.conferences.filter(
      (conf) =>
        (conf.title.toLowerCase().includes(text) || conf.address.toLowerCase().includes(text)) &&
        (!this.onlyAvailable || conf.available),
    );
  }

  get availableCount(): number {
    return this.conferences.filter((conf) => conf.available).length;
  }

  get totalPlaces(): number {
    return this.conferences.reduce((total, conf) => total + conf.places, 0);
  }

  reserver(conf: Conference): void {
    if (conf.places > 0) {
      conf.places--;
      this.message = 'Réservation confirmée pour « ' + conf.title + ' » ✅';
    }
    if (conf.places === 0) {
      conf.available = false;
    }
  }

  closeMessage(): void {
    this.message = '';
  }

  resetFilters(): void {
    this.search = '';
    this.onlyAvailable = false;
  }
}
