import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  input: string = '';
  result: string = '';

  selectNumber(number: string) {
    if (number == '.') {
      if (this.input != '') {
        const lastNumber = this.getLastOperand();
        if (lastNumber.lastIndexOf('.') >= 0) return;
      }
    }

    if (number == '0') {
      if (this.input == '') {
        return;
      }

      const lastKey = this.input[this.input.length - 1];
      if (
        lastKey === '/' ||
        lastKey === '*' ||
        lastKey === '-' ||
        lastKey === '+'
      ) {
        return;
      }
    }

    this.input = this.input + number;
    this.calculateOperation();
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

  selectOperator(operator: string) {
    const lastKey = this.input[this.input.length - 1];
    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '-' ||
      lastKey === '+'
    ) {
      return;
    }

    this.input = this.input + operator;
    this.calculateOperation();
  }

  clear() {
    if (this.input != '') {
      this.input = this.input.substr(0, this.input.length - 1);
    }
  }

  allClear() {
    this.result = '';
    this.input = '';
  }

  calculateOperation() {
    let operation = this.input;

    let lastKey = operation[operation.length - 1];

    if (lastKey === '.') {
      operation = operation.substring(0, operation.length - 1);
    }

    lastKey = operation[operation.length - 1];

    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '-' ||
      lastKey === '+' ||
      lastKey === '.'
    ) {
      operation = operation.substring(0, operation.length - 1);
    }

    this.result = eval(operation);
  }

  printResult() {
    this.calculateOperation();
    this.input = this.result;
    if (this.input == '0') this.input = '';
  }
}
