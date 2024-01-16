import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (num) => {
  let expected;
  if (num % 2 === 0) {
    expected = 'yes';
  } else {
    expected = 'no';
  }
  return expected;
};

const getAnswer = () => {
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const random = Math.floor(Math.random() * 20);
    const expected = isEven(random);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== expected) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${expected}`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    console.log('Correct!');
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default getAnswer;
