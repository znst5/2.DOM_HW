import './css/style.css';
import { GamePlay } from './js/GamePlay.js';


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('game-container');
  const game = new GamePlay(container);
  game.init();
});
