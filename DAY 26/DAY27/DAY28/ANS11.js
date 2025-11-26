// Function to display greeting
function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}

// Function to simulate getting user input
function getUserInput(callback) {
  setTimeout(() => {
    const username = "Alice";  // Simulated user name
    callback(username);        // Call the callback function
  }, 1000);
}

// Calling getUserInput and passing displayMessage as callback
getUserInput(displayMessage);
