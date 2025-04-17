/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string
console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const cameLtaiL =
  part1.slice(0, part1.length - 1) +
  part1.charAt(part1.length - 1).toUpperCase() +
  part2.slice(0, part2.length - 1) +
  part2.charAt(part2.length - 1).toUpperCase();

// Print the cameLtaiL-formatted string
console.log(cameLtaiL);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
// const tipAmount = billTotal * 0.15;
const tipAmount = billTotal * (15 / 100); // 20% tip for the second example

// Print out the tipAmount
// console.log(`The tip amount is: $${tipAmount.toFixed(2)}`);
console.log(`The tip amount is: €${tipAmount.toFixed(2)}`); // Format to 2 decimal places

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random() * 10) + 1;
// const randomNumber2 = Math.round(Math.random() * 10) + 1;

// Print the generated random number
console.log(`The random number is: ${randomNumber}`);
// console.log(`The random number is: ${randomNumber2}`);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false
console.log("false");

const expression2 = a || b; // true
console.log("true");

const expression3 = !a && b; // false
console.log("false");

const expression4 = !(a && b); // true
console.log("true");

const expression5 = !a || !b; // true
console.log("true");

const expression6 = !(a || b); // false
console.log("false");

const expression7 = a && a; // true
console.log("true");