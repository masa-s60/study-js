const fizzValue = 3;
const buzzValue = 5;

for (let i = 1; i <= 99; i++) {
  if((i % fizzValue === 0) && (i % buzzValue === 0)) {
    console.log(`FizzBuzz${i}`);
  } else {
    if(i % fizzValue === 0) {
      console.log(`Fizz${i}`); 
    } else {
      if(i % buzzValue === 0) {
        console.log(`Buzz${i}`); 
      }
    }
  }
}