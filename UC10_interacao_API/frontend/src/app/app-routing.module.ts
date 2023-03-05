import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCreateComponent } from './components/cadastro/cadastro-create/cadastro-create.component';
import { CadsatroTabelaComponent } from './components/cadastro/cadsatro-tabela/cadsatro-tabela.component';
import { CadastroUpdateComponent } from './components/cadastro/cadastro-update/cadastro-update.component';
import { CadastroDeleteComponent } from './components/cadastro/cadastro-delete/cadastro-delete.component';

const routes: Routes = [
  {
    path:'cadastro/create',
    component:CadastroCreateComponent
  },
  {
    path:'',
    component:CadsatroTabelaComponent
  },
  {
    path: 'cadastro/update/:id',
    component: CadastroUpdateComponent
  },
  {
    path: 'cadastro/delete/:id',
    component: CadastroDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
