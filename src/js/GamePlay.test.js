import { GamePlay } from './GamePlay';

test('GamePlay должен успешно генерировать поле из 16 ячеек', () => {
  const container = document.createElement('div');
  container.id = 'game-container';
  document.body.appendChild(container);
  const game = new GamePlay(container);
  game.drawUi();
  const cells = container.querySelectorAll('.cell');
  expect(cells.length).toBe(16);
  container.remove();
});
