import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {
  ra: string = '';
  nome: string = '';
  email: string = '';
  celular: string = '';
  cadastroSalvo: boolean = false; // Adiciona a propriedade para controlar o estado do botão

  salvarCadastro(): void {
    // Lógica para salvar o cadastro

    // Após salvar, define cadastroSalvo como true para desabilitar o botão
    this.cadastroSalvo = true;
  }
}
