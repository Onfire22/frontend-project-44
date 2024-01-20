import readlineSync from 'readline-sync';

const startEngine = (getAnswer, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(game);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const expected = getAnswer();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== expected) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expected}"`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    console.log('Correct!');
    count += 1;
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default startEngine;
