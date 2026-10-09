import './css/style.css';
import { GamePlay } from './js/GamePlay.js';


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('game-container');

  if (!container) {
    throw new Error('Элемент #game-container не найден в DOM');
  }

  const game = new GamePlay(container);
  game.init();
});
