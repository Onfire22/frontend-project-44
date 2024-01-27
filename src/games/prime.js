import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let result = 0;
  for (let i = 1; i <= Math.abs(num); i += 1) {
    if (num % i === 0) {
      result += 1;
    }
  }
  return result === 2;
};

const generateRound = () => {
  const random = getRandomNumber(-20, 20);
  const answer = isPrime(random) ? 'yes' : 'no';
  const question = String(random);
  return [answer, question];
};

const startGame = () => {
  startEngine(generateRound, description);
};
export default startGame;
