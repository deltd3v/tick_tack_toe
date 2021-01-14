import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tick-tack-toe';
  squares: any[] = [];
  xNext: boolean = true;
  oNext: boolean = false;

  winner: string = '';

  constructor() {}

  ngOnInit(): void {
    // set up init values for new game
    this.initNewGame();
  }

  // set values for new game
  initNewGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xNext === true
      ? ((this.xNext = false), (this.oNext = true))
      : ((this.xNext = true), (this.oNext = false));
  }

  // get current player
  get player() {
    return this.xNext ? 'O' : 'X';
  }

  // click-event-handler for making a game ttt-move
  move(squareIndex: number) {
    if (!this.squares[squareIndex]) {
      // mark the button with the current player's symbol
      this.squares.splice(squareIndex, 1, this.player);
      // remove current player's status
      this.xNext = !this.xNext;
    }

    this.winner = this.getWinner();
  }

  getWinner(): string {
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < rows.length; i++) {
      const [a, b, c] = rows[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }

    return '';
  }
}
