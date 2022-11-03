import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

lista = [
    {
      name: 'Nicola',
      lastname: 'Lerra',
      city: 'New York',
      number: '393345678901'
    },
    {
      name: 'Bruno',
      lastname: 'Stano',
      city: 'Londra',
      number: '393687678901'
    },
    {
      name: 'Giovanni',
      lastname: 'Urso',
      city: 'Napoli',
      number: '393680988901'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
