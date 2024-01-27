import readlineSync from 'readline-sync';

const startEngine = (generateRound, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(description);
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const [expected, question] = generateRound();
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
