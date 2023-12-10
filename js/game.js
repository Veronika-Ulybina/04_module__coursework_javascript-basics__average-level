'use strict';

(() => {
  const getRandomIntInclusive = (max, min = 1) => {
    min = Math.min(min, max);
    max = Math.max(min, max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = () => {
    const result = {
      player: 5,
      bot: 5,
    };

    return function start() {
      const player = prompt(`Ваш ход! Введите число от 1 до ${result.player}`);

      if (player === null) {
        return;
      }

      const playerNum = Number.parseInt(player);

      if (playerNum < 1 || playerNum > result.player ||
        Number.isNaN(playerNum)) {
        return start();
      }

      const bot = Math.round(Math.random());
      bot ? alert(`Бот: Число нечётное?`) : alert(`Бот: Число чётное?`);

      if (playerNum % 2 === bot) {
        result.bot += playerNum;
        result.player -= playerNum;

        if (result.player <= 0) {
          alert('Бот выйграл');
          return;
        }

        alert(`
        Бот угадал
          Игрок: ${result.player}
          Бот: ${result.bot}`);
      } else {
        result.player += playerNum;
        result.bot -= playerNum;

        if (result.bot <= 0) {
          alert('Игрок выйграл');
          return;
        }

        alert(`
        Бот не угадал
          Игрок: ${result.player}
          Бот: ${result.bot}`);
      }

      const botNum = getRandomIntInclusive(result.bot);

      const isEven = confirm('Ход бота! Число чётное?');

      if (botNum % 2 === +isEven) {
        result.bot += botNum;
        result.player -= botNum;

        if (result.player <= 0) {
          alert('Бот выйграл');
          return;
        }

        alert(`
        Вы не угадали
          Игрок: ${result.player}
          Бот: ${result.bot}`);
      } else {
        result.player += botNum;
        result.bot -= botNum;

        if (result.bot <= 0) {
          alert('Игрок выйграл');
          return;
        }

        alert(`
        Правильно
          Игрок: ${result.player}
          Бот: ${result.bot}`);
      }

      return start();
    };
  };

  window.marbles = game;
})();
