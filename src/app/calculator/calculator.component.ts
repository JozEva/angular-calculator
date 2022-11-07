import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  input: string = '';
  result: string;

  selectNumber(number: string) {
    if (number === '.') {
      if (this.input !== '') {
        const lastOperand = this.getLastOperand();
        if (lastOperand.lastIndexOf('.') >= 0) return;
      }
    }

    if (number == '0') {
      if (this.input == '') {
        return;
      }
    }
    this.result = '';
    this.input = this.input + number;
  }

  selectOperator(operator: string) {
    if (this.input === '') return;

    const lastKey = this.input[this.input.length - 1];
    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '-' ||
      lastKey === '+'
    ) {
      return;
    }
    return (this.input = this.input + operator);
  }

  getLastOperand() {
    let position: number;
    position = this.input.toString().lastIndexOf('+');
    if (this.input.toString().lastIndexOf('-') > position)
      position = this.input.lastIndexOf('-');
    if (this.input.toString().lastIndexOf('*') > position)
      position = this.input.lastIndexOf('*');
    if (this.input.toString().lastIndexOf('/') > position)
      position = this.input.lastIndexOf('/');
    return this.input.substring(position + 1);
  }

  allClear(): void {
    this.input = '';
    this.result = '';
  }

  clear(): void {
    if (this.input !== '') {
      this.input = this.input.slice(0, this.input.length - 1);
    }
  }

  calculate(): void {
    if (this.input === '') return;
    this.input = eval(this.input);
    this.result = this.input;
    this.input = '';
  }
}
