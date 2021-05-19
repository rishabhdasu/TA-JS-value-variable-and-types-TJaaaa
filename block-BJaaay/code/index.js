//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

for(i =1; i <= 10; i++){
    console.log(i);
}

// Using `console.log` log all the evan values from 1 to 10.
for(i = 1; i <= 10; i++){
    if(i % 2 == 0)
  console.log(i);
}

// Using `console.log` log all the od values from 1 to 10.
for(i = 1; i <= 10; i++){
  if(i % 2 !== 0)
console.log(i);
}

// Calculate the sum of all numbers from 1 to 10.
for(i = 0; i <= 10; i++){
  let sum = 0;
  sum = (i * (i+1)) / 2;
  let total = sum + i;
  console.log(total);
}

// Log all the values from 1 to 10 using while loop

let i = 0;
while(i <= 10){
  console.log(i);
  i++;
}


