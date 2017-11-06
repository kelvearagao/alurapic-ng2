import { FotoService } from './../foto/foto.service';
import { Http, Headers } from '@angular/http';
import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;

    constructor(service: FotoService, fb: FormBuilder) {

        this.service = service;
        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])], 
            url: ['', Validators.required], 
            descricao: ['']
        });            
    }

    cadastrar() {
        event.preventDefault();

        console.log(this.foto);

        this.service
            .cadastra(this.foto)
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log('Salvo com sucesso!');
            }, erro => console.log(erro));
    }

}