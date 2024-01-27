import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i < Math.abs(num); i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
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
