import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  list: profiles[];

  friends = ["Sami", "Sarra", "Amine"];
  show = false;

  ngOnInit() {
    this.list = [
      { nom: "Ghribi", prenom: "Asma", email: "asma@email.com" },
      { nom: "Trabelsi", prenom: "Esra", email: "esra@email.com" },
      { nom: "Gharbi", prenom: "Ala", email: "ala@email.com" }
    ];
  }
}
