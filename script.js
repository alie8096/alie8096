function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // تغییر حالت دارک مود
    body.classList.toggle('dark-mode');

    // تغییر رنگ دکمه با کلاس active
    darkModeToggle.classList.toggle('active');
}

// اسلایدشو
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    slides[0].style.display = 'block';
});

// منوی نوبار
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}
// Load footer and then execute additional scripts
$(document).ready(function() {
    $.ajax({
        url: 'footer.html',
        method: 'GET',
        success: function(data) {
            $('body').append(data);
        },
        error: function() {
            console.log('Error loading footer');
        }
    });
});
