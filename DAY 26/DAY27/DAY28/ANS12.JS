// Step 1: Timer function with callback
function timer(duration, onComplete) {
  setTimeout(() => {
    const message = `Timer of ${duration} ms finished`;
    onComplete(message); // Callback ko message ke saath call karna
  }, duration);
}

// Step 2: Calling the timer function
timer(2000, (msg) => {
  console.log(msg);
});
