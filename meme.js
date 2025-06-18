// Slideshow functionality
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slides');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Like functionality for memes
const likeCounts = [0, 0, 0];
function likeMeme(index) {
    likeCounts[index - 1]++;
    document.getElementById(`likeCount${index}`).innerText = likeCounts[index - 1];
}

// Voting functionality for memes
function voteMeme(meme) {
    document.getElementById('voteResult').innerText = `You voted for ${meme}!`;
}