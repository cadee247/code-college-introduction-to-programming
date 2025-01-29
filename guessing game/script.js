let secret =  Math.floor(Math.random() * 20) + 1; 

while (true) { 
    
    let guess = parseInt(prompt("Please guess the secret number (1-20)" + secret));
    
    if (guess === secret) { 
        alert("Correct Guess!");
        break;
    } else if (guess < secret) { 
        alert("Incorrect, too low");
    } else {
        alert("Incorrect, too high");
    }
}

// secret = Math.floor(Math.random() * 20) + 1; 
// document.addEventListener("DOMContentLoaded", function() {
//     let secret = Math.floor(Math.random() * 20) + 1; // Random secret number
//     const guessInput = document.getElementById("guess-input");
//     const guessButton = document.getElementById("guess-button");
//     const result = document.getElementById("result");

//     guessButton.addEventListener("click", function() {
//         let guess = parseInt(guessInput.value);
//         if (guess === secret) {
//             result.textContent = "Correct Guess!";
//         } else if (guess < secret) {
//             result.textContent = "Incorrect, too low";
//         } else {
//             result.textContent = "Incorrect, too high";
//         }
//     });
// });
