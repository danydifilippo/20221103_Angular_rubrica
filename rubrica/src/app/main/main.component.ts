import { Component, OnInit } from '@angular/core';
import { Contatto } from '../classes/contatto';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

infoContact?: Contatto;

lista: Contatto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onInsert(contact:Contatto){
    this.lista.push(contact)
  }

  onRemoveItem(contact:Contatto){
    this.lista = this.lista.filter(c => c.number !== contact.number)
  }

  onShowItem(contact:Contatto){
    this.infoContact = contact
  }
}
