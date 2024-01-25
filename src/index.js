import readlineSync from 'readline-sync';

const startEngine = (getAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [expected, question] = getAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== expected) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expected}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startEngine;
