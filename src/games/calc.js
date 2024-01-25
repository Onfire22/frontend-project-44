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
      throw new Error('Uncnown parametr!');
  }
};

const getAnswer = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(2, 20);
  const number2 = getRandomNumber(2, 20);
  const operator = operators[getRandomNumber(0, 2)];
  const question = `${number1} ${operator} ${number2}`;
  const expected = calculate(number1, operator, number2);
  return [String(expected), question];
};

const startGame = () => {
  startEngine(getAnswer, description);
};
export default startGame;
