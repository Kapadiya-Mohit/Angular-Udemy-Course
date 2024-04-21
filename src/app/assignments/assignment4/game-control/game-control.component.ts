
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  @Output() setIntervalFired = new EventEmitter<number>();

  ngOnInit(): void {
  }
  number = 0;
  interval: any

  onstartGame() {
    this.interval = setInterval(() => {
      this.setIntervalFired.emit(this.number + 1);
      this.number++;
    }, 1000
    )
    return this.interval;
  }

  onEndGame() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
