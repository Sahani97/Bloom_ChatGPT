// Contact Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Your message has been sent successfully!");
        document.getElementById('contact-form').reset();
    } else {
        alert("Please fill out all the fields.");
    }
});
