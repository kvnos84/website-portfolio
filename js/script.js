// JavaScript for dynamic typewriter effect
const words = ["product designer  ", "web developer  ", "HIIT enthusiast  "]; // Your custom words
const typewriter = document.querySelector(".typewriter-container");
let wordIndex = 0; // Start with the first word
let charIndex = 0; // Start with the first character of the word
let isDeleting = false;
const typingSpeed = 100; // Typing speed in milliseconds
const deletingSpeed = 50; // Deleting speed in milliseconds
const pauseBetweenWords = 600; // Pause before starting deletion

function type() {
  const currentWord = words[wordIndex]; // Get the current word from the array
  const currentText = isDeleting
    ? currentWord.substring(0, charIndex--) // Remove one character at a time when deleting
    : currentWord.substring(0, charIndex++); // Add one character at a time when typing

  // Update the text content of the typewriter
  typewriter.textContent = currentText;

  // Determine the typing speed (faster for deleting)
  const speed = isDeleting ? deletingSpeed : typingSpeed;

  // Check if the word is fully typed or deleted
  if (!isDeleting && charIndex === currentWord.length) {
    // Word fully typed; pause before deleting
    isDeleting = true; // Start deleting
    setTimeout(type, pauseBetweenWords); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    // Word fully deleted; move to the next word
    isDeleting = false; // Switch back to typing mode
    wordIndex = (wordIndex + 1) % words.length; // Move to the next word (loop back to the start)
    setTimeout(type, 600); // Pause before typing the next word
  } else {
    setTimeout(type, speed); // Continue typing or deleting
  }
}

// Start the typewriter effect when the page loads
window.addEventListener('DOMContentLoaded', type);