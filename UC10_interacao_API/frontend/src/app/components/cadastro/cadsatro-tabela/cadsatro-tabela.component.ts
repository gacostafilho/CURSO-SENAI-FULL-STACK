import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadsatro-tabela',
  templateUrl: './cadsatro-tabela.component.html',
  styleUrls: ['./cadsatro-tabela.component.css']
})
export class CadsatroTabelaComponent {

  constructor(private router:Router){}
  
  navCreateCadastro () {
    this.router.navigate(['cadastro/create'])
  }

}
