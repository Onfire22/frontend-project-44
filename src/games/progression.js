import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'What number is missing in the progression?';
const getProgression = (start, step, end) => {
  const progression = [];
  let begin = start;
  let count = 0;
  while (count < end) {
    progression.push(String(begin));
    begin += step;
    count += 1;
  }
  return progression;
};

const getAnswer = () => {
  const start = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 5);
  const end = getRandomNumber(5, 10);
  const progression = getProgression(start, step, end);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const expected = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = `${progression.join(' ')}`;
  return [expected, question];
};

const startGame = () => {
  startEngine(getAnswer, description);
};

export default startGame;
