import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const present = document.getElementById('present')

const Confetti = () => {
    confetti();
}

present.addEventListener('click', Confetti)