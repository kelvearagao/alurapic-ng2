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

    constructor(private http: Http, fb: FormBuilder) {
        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])], 
            url: ['', Validators.required], 
            descricao: ['']
        });            
    }

    cadastrar() {
        event.preventDefault();

        console.log(this.foto);

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        this.http
            .post('v1/fotos', JSON.stringify(this.foto), { headers: headers })
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log('Salvo com sucesso!');
            }, erro => console.log(erro));
    }

}