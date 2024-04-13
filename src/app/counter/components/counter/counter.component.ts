import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>counter: {{ counter }}</h3>
    <button (click)="increaseBy(2)">+</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decraseBy(2)">-</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decraseBy(value: number): void {
    this.counter -= value;
  }

  reset(): void {
    this.counter = 10;
  }
}
