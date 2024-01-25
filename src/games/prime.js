import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      result += 1;
    }
  }
  return result === 2;
};

const getAnswer = () => {
  const random = getRandomNumber(2, 20);
  const expected = isPrime(random) ? 'yes' : 'no';
  console.log(`Question: ${random}`);
  return expected;
};

const startGame = () => {
  startEngine(getAnswer, description);
};
export default startGame;
