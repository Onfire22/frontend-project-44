import startEngine from '../index.js';
import getRandomNumber from '../randomgenerator.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getAnswer = () => {
  const random = getRandomNumber(2, 20);
  const expected = isEven(random) ? 'yes' : 'no';
  console.log(`Question: ${random}`);
  return expected;
};

const startGame = () => {
  startEngine(getAnswer, description);
};
export default startGame;
