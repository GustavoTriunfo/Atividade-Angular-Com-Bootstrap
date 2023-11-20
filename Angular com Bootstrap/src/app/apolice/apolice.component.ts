import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {
  nomeSegurado: string = '';
  sexo: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;
  valorApolice: number = 0;

  calcularApolice(): void {
    if (this.sexo === 'masculino') {
      this.valorApolice = this.idade <= 25 ? this.valorAutomovel * 0.15 : this.valorAutomovel * 0.10;
    } else if (this.sexo === 'feminino') {
      this.valorApolice = this.valorAutomovel * 0.08;
    } else {
      this.valorApolice = 0;
    }
  }
}
