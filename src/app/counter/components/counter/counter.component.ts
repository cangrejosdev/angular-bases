import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>counter value: {{counter}}</h3>

  <button (click)="incrementBy(1)">+1</button>
  <button (click)="incrementBy(10)">Reset</button>
  <button (click)="incrementBy(-1)">-1</button>`,
})

export class CounterComponent {

  public counter: number = 10;
  incrementBy(value: number): void {
    if (value === 10) {
      this.counter = value;
    } else { this.counter += value; }
  }
  constructor() {

  }


}
