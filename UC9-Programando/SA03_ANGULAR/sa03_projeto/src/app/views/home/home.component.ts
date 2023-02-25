import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
/*import {NgForm} from '@angular/forms'*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;

  classToDiv = {};

  constructor() {
    this.classToDiv = {
      "text-success":true
    };
  }

  ngOnInit() {
    this.titulo! = 'Lorem ipsum bla bla'
    this.texto! = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
  /*onSubmit(form: NgForm) {
    let dados = 
    Nome: ${form.value.nome};

    console.log(dados);
  }*/

}
