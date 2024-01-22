import getRandomNumber from '../randomgenerator.js';
import startEngine from '../index.js';

const description = 'What number is missing in the progression?';
const getProgression = () => {
  const progression = [];
  let start = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 5);
  const end = getRandomNumber(5, 10);
  let count = 0;
  while (count < end) {
    progression.push(String(start));
    start += step;
    count += 1;
  }
  return progression;
};

const getAnswer = () => {
  const progression = getProgression();
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const expected = progression[randomIndex];
  progression[randomIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  return expected;
};

const startGame = () => {
  startEngine(getAnswer, description);
};

export default startGame;
