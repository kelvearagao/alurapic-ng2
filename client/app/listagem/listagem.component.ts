import { FotoComponent } from './../foto/foto.component';
import { FotoService } from './../foto/foto.service';
import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];
    
    constructor(service: FotoService) {

        service
            .lista()
            .subscribe(res => {
                this.fotos = res;
            }, erro => console.log(erro));

    }

}