import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const generateRound = () => {
  const number = getRandomNumber(2, 20);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return [answer, question];
};

const startGame = () => {
  startEngine(generateRound, description);
};
export default startGame;
