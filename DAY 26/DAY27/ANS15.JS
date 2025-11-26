const readline = require("readline");

// User input lene ke liye interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// User se input mangna
rl.question("Enter seconds to start countdown: ", (input) => {
  let time = Number(input);

  if (isNaN(time) || time <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  console.log(`Countdown started for ${time} seconds...`);
  console.log(`Press "s" to stop the timer.`);

  // Countdown using setInterval
  const timer = setInterval(() => {
    console.log(`Remaining: ${time} sec`);

    if (time === 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }

    time--;
  }, 1000);

  // Key detection using setTimeout loop
  const keyCheck = () => {
    setTimeout(() => {
      rl.on("line", (key) => {
        if (key.trim().toLowerCase() === "s") {
          clearInterval(timer);
          console.log("Countdown Stopped by User!");
          rl.close();
        }
      });
    }, 500); // half-second delay to simulate async input check
  };

  keyCheck();
});

