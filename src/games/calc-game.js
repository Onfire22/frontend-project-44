import getRandomNumber from '../randomgenerator.js';
import startEngine from '../index.js';

const calcExpression = (num1, operator, num2) => {
  let result = '';
  if (operator === '+') {
    result += num1 + num2;
  } else if (operator === '-') {
    result += num1 - num2;
  } else if (operator === '*') {
    result += num1 * num2;
  }
  return result;
};

const getAnswer = () => {
  const operators = ['+', '-', '*'];
  const random1 = getRandomNumber(2, 20);
  const random2 = getRandomNumber(2, 20);
  const randOperator = operators[getRandomNumber(0, 2)];
  console.log(`Question: ${random1} ${randOperator} ${random2}`);
  const expected = calcExpression(random1, randOperator, random2);
  return expected;
};

const description = 'What is the result of the expression?';
const startGame = () => {
  startEngine(getAnswer, description);
};
export default startGame;
