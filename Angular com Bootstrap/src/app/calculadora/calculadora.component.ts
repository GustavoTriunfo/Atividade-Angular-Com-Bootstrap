import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  n1: number = 0;
  n2: number = 0;
  resultado: number = 0;
  operacao: string = 'soma'; // Valor padrão é 'soma'

  public calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.n1 + this.n2;
        break;
      case 'subtracao':
        this.resultado = this.n1 - this.n2;
        break;
        case 'multiplicacao':
        this.resultado = this.n1 * this.n2;
        break;
        case 'divisao':
        this.resultado = this.n1 / this.n2;
        break;
      // Adicione mais casos conforme necessário
      default:
        this.resultado = 0;
    }
  }
}
