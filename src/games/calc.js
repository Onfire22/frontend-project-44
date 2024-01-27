import getRandomNumber from '../getRandomNumber.js';
import startEngine from '../index.js';

const description = 'What is the result of the expression?';
const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown parametr ${operator}!`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const operatorsLength = 2;
  const number1 = getRandomNumber(2, 20);
  const number2 = getRandomNumber(2, 20);
  const operator = operators[getRandomNumber(0, operatorsLength)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, operator, number2);
  return [String(answer), question];
};

const startGame = () => {
  startEngine(generateRound, description);
};
export default startGame;
