// Name Typing Animation
// Character-by-character animation with underscore cursor

const nameDisplay = document.getElementById('name-display');
const typingEffect = document.getElementById('name-typing-effect');

if (!nameDisplay || !typingEffect) {
    console.log('Typing animation elements not found');
    return;
}

// Name to display (with quotes)
const name = 'Adam Peter Lynch';

// Initialize display with quotes
nameDisplay.textContent = '"' + name + '"';
typingEffect.textContent = '';

// Typing effect - show characters one by one with underscore cursor
const nameChars = '"' + name + '"';
let currentIndex = 0;

const typeCharacter = () => {
    if (currentIndex < nameChars.length) {
        // Remove underscore and add next character
        const currentText = nameDisplay.textContent.trim();
        const textWithoutUnderscore = currentText.replace(/_$/, '');
        const charToType = nameChars[currentIndex];
        
        nameDisplay.textContent = textWithoutUnderscore + charToType + '_';
        currentIndex++;
        
        // Reset typing effect div to empty
        typingEffect.textContent = '';
        
        // Type next character after delay
        setTimeout(typeCharacter, 100); // 100ms between characters
    }
};

// Start typing effect after a brief delay
setTimeout(typeCharacter, 500);

// After all characters typed, fade out overlay
setTimeout(() => {
    if (nameDisplay) {
        nameDisplay.style.opacity = '0';
        nameDisplay.style.transition = 'opacity 1s ease';
    }
}, nameChars.length * 100 + 500);
