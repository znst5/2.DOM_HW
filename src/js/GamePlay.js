import goblinImg from '../pic/goblin.png';

export class GamePlay {
  constructor(container) {
    this.container = container;
    this.boardSize = 4;
    this.cells = [];
    this.currentCellIndex = -1;
    this.intervalId = null;
  }

  drawUi() {
    const totalCells = this.boardSize * this.boardSize;
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.container.appendChild(cell);
      this.cells.push(cell);
    }

    this.character = document.createElement('img');
    this.character.src = goblinImg;
    this.character.classList.add('character');
  }

  generateNewIndex() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.cells.length);
    } while (newIndex === this.currentCellIndex);

    return newIndex;
  }

  moveCharacter() {
    const newIndex = this.generateNewIndex();
    this.cells[newIndex].appendChild(this.character);
    this.currentCellIndex - newIndex;
  }

  init() {
    this.drawUi();
    this.moveCharacter();
    this.intervalId = setInterval(() => this.moveCharacter(), 1000);
  }
}
