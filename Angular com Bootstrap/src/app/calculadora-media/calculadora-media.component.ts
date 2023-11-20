import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-media',
  templateUrl: './calculadora-media.component.html',
  styleUrls: ['./calculadora-media.component.css']
})
export class CalculadoraMediaComponent {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  media: number = 0;
  resultado: string = '';

  calcularMedia(): void {
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    this.resultado = this.media >= 5 ? 'Aprovado' : 'Reprovado';
  }
}
