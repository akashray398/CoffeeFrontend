let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', '');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Scroll to Top
const scrollTop = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission
const bookForm = document.querySelector('#book form');

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = bookForm.querySelector('input[placeholder="Name"]').value;
    const email = bookForm.querySelector('input[placeholder="Email"]').value;
    const number = bookForm.querySelector('input[placeholder="Number"]').value;
    const message = bookForm.querySelector('textarea').value;

    if (name && email && number) {
        alert(`Thank you ${name}! Your table booking request has been received. We'll contact you at ${email} or ${number} soon.`);
        bookForm.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Review images click
document.querySelectorAll('.review-img').forEach(img => {
    img.addEventListener('click', () => {
        const reviewBox = img.closest('.box');
        const reviewerName = reviewBox.querySelector('h3').textContent;
        const reviewText = reviewBox.querySelector('p').textContent;
        alert(`${reviewerName} says: "${reviewText}"`);
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});