const generateBtn = document.getElementById('generate-btn');
const faceImage = document.getElementById('face-image');
const copyBtn = document.getElementById('copy-btn');
const saveBtn = document.getElementById('save-btn');
const loader = document.getElementById('loader');
const counter = document.getElementById('counter');
const emojiLeft = document.getElementById('emoji-left');
const emojiRight = document.getElementById('emoji-right');

let faceCount = 0;

const UNSPLASH_ACCESS_KEY = 'VGP7rO5d_0bILfyGWkPmM2XpPVMTE5lV6RRN6--HkUk'; 
const UNSPLASH_API_URL = `https://api.unsplash.com/photos/random?query=funny+animal&client_id=${UNSPLASH_ACCESS_KEY}`;

const funnyEmojis = ['😂', '😄', '😆', '🤣', '😹', '😜', '🤪', '😝', '😁'];

generateBtn.addEventListener('click', () => {
    loader.style.display = 'block';
    faceImage.style.display = 'none';

    fetch(UNSPLASH_API_URL)
        .then(response => response.json())
        .then(data => {
            faceImage.src = data.urls.regular;
            faceImage.alt = data.alt_description || 'Funny Animal Face';

            faceImage.classList.add('animate');
            setTimeout(() => faceImage.classList.remove('animate'), 300);

            faceCount++;
            counter.textContent = `Faces Generated: ${faceCount}`;

            loader.style.display = 'none';
            faceImage.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            loader.style.display = 'none';
        });

    const randomEmojiLeft = funnyEmojis[Math.floor(Math.random() * funnyEmojis.length)];
    const randomEmojiRight = funnyEmojis[Math.floor(Math.random() * funnyEmojis.length)];
    emojiLeft.textContent = randomEmojiLeft;
    emojiRight.textContent = randomEmojiRight;
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(faceImage.src).then(() => {
        alert('Image URL copied to clipboard!');
    });
});

saveBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = faceImage.src;
    link.download = 'funny-animal-face.jpg';
    link.click();
});
