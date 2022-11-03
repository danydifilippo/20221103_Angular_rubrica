import { Component, Input, OnInit } from '@angular/core';
import { Contatto } from 'src/app/classes/contatto';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() contact: Contatto = new Contatto();

  constructor() { }

  ngOnInit(): void {
  }

}
