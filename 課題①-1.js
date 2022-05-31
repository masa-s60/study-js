const FizzValue = 3;
const BuzzValue = 5;

for (let i = 1; i <= 99; i++) {
  if((i % FizzValue === 0) && (i % BuzzValue === 0)) {
    console.log(`FizzBuzz${i}`);
    continue;
  } else {
    if(i % 3 === 0) {
      console.log(`Fizz${i}`); 
    } else {
      if(i % 5 === 0) {
        console.log(`Buzz${i}`); 
      }
    }
  }
}