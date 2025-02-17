import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  addition(a: number, b: number): number {
    return a + b;
  }

  soustraction(a: number, b: number): number {
    return a - b;
  }

  multiplication(a: number, b: number): number {
    return a * b;
  }

  division(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

