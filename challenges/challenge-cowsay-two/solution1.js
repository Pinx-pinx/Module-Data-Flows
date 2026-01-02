// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?
const args = process.argv.slice(2);
const message = args.length > 0 ? args.join(" ") : "Mooooo";
// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let saying = '';

// 3. Make a cow that takes a string

function cowsay(saying) {
  
  const text = saying || "Mooooo";                 
  const topLine = " " + "_".repeat(text.length + 2);
  const middleLine = `< ${text} >`;
  const bottomLine = " " + "-".repeat(text.length + 2);
// how will you make the speech bubble contain the text?
// Answer: use the text length to create top and bottom lines, and wrap the text inside < >

// where will the cow picture go?
// Answer:directly below the speech bubble
  const cowArt = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;
return `${topLine}\n${middleLine}\n${bottomLine}\n${cowArt}`;

// how will you account for the parameter being empty?
 // Answer: default to "Mooooo"
}

//4. Pipe argument into cowsay function and return a cow
// Answer: call the function with the message and console.log the result

// how will you log this to the console?
console.log(cowsay(message));
