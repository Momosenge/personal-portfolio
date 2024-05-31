let slideIndex = 1;
showSlide(slideIndex);

// Function to display current slide
function showSlide(n) {
    const slides = document.querySelectorAll('.slideshow img');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// Function to move to the previous slide
function prevSlide() {
    showSlide(slideIndex -= 1);
}

// Function to move to the next slide
function nextSlide() {
    showSlide(slideIndex += 1);
}


//contact me page
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('https://example.com/submit-contact-form', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to submit form');
            }
        })
        .then(data => {
            responseMessage.textContent = 'Message sent successfully!';
            form.reset();
        })
        .catch(error => {
            responseMessage.textContent = 'An error occurred. Please try again later.';
        });
    });
});
