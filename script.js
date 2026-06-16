const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

const reviewsTrack = document.getElementById('reviewsTrack');
const reviewsPrev = document.getElementById('reviewsPrev');
const reviewsNext = document.getElementById('reviewsNext');
let reviewsIndex = 0;

function getReviewsVisible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function updateReviewsSlider() {
    const visible = getReviewsVisible();
    const cards = reviewsTrack.children;
    const maxIndex = Math.max(0, cards.length - visible);
    if (reviewsIndex > maxIndex) reviewsIndex = maxIndex;
    const cardWidth = cards[0].offsetWidth + 30;
    reviewsTrack.style.transform = `translateX(-${reviewsIndex * cardWidth}px)`;
}

reviewsNext.addEventListener('click', () => {
    const visible = getReviewsVisible();
    const maxIndex = Math.max(0, reviewsTrack.children.length - visible);
    if (reviewsIndex < maxIndex) {
        reviewsIndex++;
        updateReviewsSlider();
    }
});

reviewsPrev.addEventListener('click', () => {
    if (reviewsIndex > 0) {
        reviewsIndex--;
        updateReviewsSlider();
    }
});

const certTrack = document.getElementById('certTrack');
const certPrev = document.getElementById('certPrev');
const certNext = document.getElementById('certNext');
let certIndex = 0;

function getCertVisible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function updateCertSlider() {
    const visible = getCertVisible();
    const cards = certTrack.children;
    const maxIndex = Math.max(0, cards.length - visible);
    if (certIndex > maxIndex) certIndex = maxIndex;
    const cardWidth = cards[0].offsetWidth + 30;
    certTrack.style.transform = `translateX(-${certIndex * cardWidth}px)`;
}

certNext.addEventListener('click', () => {
    const visible = getCertVisible();
    const maxIndex = Math.max(0, certTrack.children.length - visible);
    if (certIndex < maxIndex) {
        certIndex++;
        updateCertSlider();
    }
});

certPrev.addEventListener('click', () => {
    if (certIndex > 0) {
        certIndex--;
        updateCertSlider();
    }
});

const questionForm = document.getElementById('questionForm');
questionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Заявка отправлена!');
    questionForm.reset();
});

window.addEventListener('resize', () => {
    updateReviewsSlider();
    updateCertSlider();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});