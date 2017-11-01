import { CadastroComponent } from './cadastro/cadastro.componente';
import { ListagemComponent } from './listagem/listagem.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent}
];

export const routing = RouterModule.forRoot(appRoutes);