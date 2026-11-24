import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-cof',
  imports: [ FormsModule , CommonModule],
  templateUrl: './list-cof.html',
  styleUrl: './list-cof.css',
})
export class ListCof {
  list: Conference[] ;
  searchtitle: string ="";
//cycle de v
//1-
  constructor() {
    //services
}
//2-
ngOnInit() {
  this.list = [
    {
      title: "Conference Angular",
      description: "web dev conference and workshop",
      date:"12-06-2026",
      nbrMax: 20,
      nbrReservation: 0,
      picture:"https://tse4.mm.bing.net/th/id/OIP.naBZzjkABE_0DXbmAuEhggHaEt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
     {
      title: "Conference React",
      description: "web dev conference and workshop",
      date:"12-06-2026",
      nbrMax: 20,
      nbrReservation: 19,
      picture:"https://th.bing.com/th/id/OIP.cSShcLEtJV5oPcNajCV6sAHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
     ]
}
participate(conf: Conference):void{
  conf.nbrReservation++;
}
}