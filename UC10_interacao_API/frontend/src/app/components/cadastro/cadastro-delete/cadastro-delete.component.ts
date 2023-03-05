import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent {

  cadastro: Cadastro = {
    usuario: '',
    senha: ''
  };

  constructor(private cadastroServive: CadastroService,
              private router: Router,
              private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    this.cadastroServive.readById(id).subscribe((cadastro) => {
      this.cadastro = cadastro;
    })
  }

  deleteCadastro(): void{
    this.cadastroServive.deleteCadastro(this.cadastro.id!).subscribe(() =>{
      this.cadastroServive.showMessage('Cadastro deletado')
      this.router.navigate([''])
    })
  }

  cancelarCadastro () {
    this.router.navigate([''])
  }

  tabelasCadastro () {
    this.router.navigate([''])
  }


}
