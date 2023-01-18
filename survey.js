const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let message = "";
rl.question('What\'s your name? ', (answer) => {
  message += answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    message += " loves playing the activity " + answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      message += ", while listening to " + answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        message += ", " + answer + " is the favourite meal time";
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          message += " eating " + answer + " during this time";
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            message += ", prefers " + answer + " over any other sport ";
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              message += "and superpower being " + answer + ".";
              console.log(message);
              rl.close();
            });
          });
        });
      });
    });
  });
});