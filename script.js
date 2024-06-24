
const emojis = {
    animals: ['😺', '🐶', '🐱', '🦁', '🐯', '🐵', '🐻', '🐼', '🐨', '🐸'],
    faces: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇'],
    foods: ['🍎', '🍊', '🍉', '🍇', '🍓', '🍒', '🍍', '🍌', '🍑', '🥭']
};

const generateBtn = document.getElementById('generate-btn');
const faceEmoji = document.getElementById('face-emoji');
const categorySelect = document.getElementById('category-select');
const copyBtn = document.getElementById('copy-btn');

generateBtn.addEventListener('click', () => {
    const selectedCategory = categorySelect.value;
    const randomIndex = Math.floor(Math.random() * emojis[selectedCategory].length);
    faceEmoji.textContent = emojis[selectedCategory][randomIndex];
    
    
    faceEmoji.classList.add('animate');
    setTimeout(() => faceEmoji.classList.remove('animate'), 300);
});


copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(faceEmoji.textContent).then(() => {
        alert('Emoji copied to clipboard!');
    });
});
