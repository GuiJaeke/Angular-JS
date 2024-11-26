import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-calc',
  standalone: false,
  
  templateUrl: './teste-calc.component.html',
  styleUrl: './teste-calc.component.css'
})
export class TesteCalcComponent {
  num: string = '';
  num2: string = '';
  operator= 0;
  resultString: number = 0;
  firstNum: boolean = true;

  number(numString: string): void {
    if (this.firstNum) {
      this.num = this.num + numString
    } else {
      this.num2 = this.num2 + numString
    }
  }
  soma(): void {
    this.firstNum = false
    this.operator = 1
  }
  sub(): void {
    this.firstNum = false
    this.operator = 2
  }
  mult(): void {
    this.firstNum = false
    this.operator = 3
  }
  div(): void {
    this.firstNum = false
    this.operator = 4
  }
  result(): void {
    if (this.operator == 1) {
    this.resultString = parseInt(this.num) + parseInt(this.num2)
    this.num = `${this.resultString}`;
    this.num2 = '';
    this.firstNum = true
  }
    if (this.operator == 2) {
    this.resultString = parseInt(this.num) - parseInt(this.num2)
    this.num = `${this.resultString}`;
    this.num2 = '';
    this.firstNum = true
  }
    if (this.operator == 3) {
    this.resultString = parseInt(this.num) * parseInt(this.num2)
    this.num = `${this.resultString}`;
    this.num2 = '';
    this.firstNum = true
  }
    if (this.operator == 4) {
    this.resultString = parseInt(this.num) / parseInt(this.num2)
    this.num = `${this.resultString}`;
    this.num2 = '';
    this.firstNum = true
  }
  }
}
