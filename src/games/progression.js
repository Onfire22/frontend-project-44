import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'What number is missing in the progression?';
const getProgression = (start, step, length) => {
  const progression = [];
  let begin = start;
  for (let i = 0; i < length; i += 1) {
    progression.push(begin);
    begin += step;
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 10);
  const progression = getProgression(start, step, length);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [String(answer), question];
};

const startGame = () => {
  startEngine(generateRound, description);
};

export default startGame;
