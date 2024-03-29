import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const searchGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return b;
};

const generateRound = () => {
  const random1 = getRandomNumber(2, 50);
  const random2 = getRandomNumber(2, 50);
  const question = `${random1} ${random2}`;
  const answer = searchGcd(random1, random2);
  return [String(answer), question];
};

const startGame = () => {
  startEngine(generateRound, description);
};

export default startGame;
