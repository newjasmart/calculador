import { Component } from '@angular/core';
import { CalculadoraService } from '../service/calculadora/calculadora.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  result: number = 0;
  num1: number = 0;
  num2: number = 0;
  error: string = '';

  constructor(private calculadoraService: CalculadoraService) {}

  addition() {
    this.result = this.calculadoraService.addition(this.num1, this.num2);
  }

  soustraction() {
    this.result = this.calculadoraService.soustraction(this.num1, this.num2);
  }

  multiplication() {
    this.result = this.calculadoraService.multiplication(this.num1, this.num2);
  }

  division() {
    try {
      this.result = this.calculadoraService.division(this.num1, this.num2);
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.error = error.message;  
      } else {
        this.error = "Unknown error occurred";  
      }
    }
    
  }
}
