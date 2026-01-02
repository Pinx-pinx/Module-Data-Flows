// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// 2. Make supplies for our speech bubble
//Answer: Ill build it dynamically below.
// 3. Make a cow that takes a string

const cow = (saying) => {
    // how did you make the cow before?
    const text = saying || "Mooooo"; 
  const width = text.length + 2;
  const topLine = " " + "_".repeat(width);
  const middleLine = `< ${text} >`;
  const bottomLine = " " + "-".repeat(width);

  // Cow ASCII art
  const cowArt = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;

  return `${topLine}\n${middleLine}\n${bottomLine}\n${cowArt}`;
};

// 4. Use readline to get a string from the terminal 
rl.question("What should the cow say? ", (answer) => {
  console.log(cow(answer));
  rl.close();
});
// (with a prompt so it's clearer what we want)