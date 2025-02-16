document.addEventListener('DOMContentLoaded', function() {
    const registerButtons = document.querySelectorAll('.btn-register');

    registerButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const link = button.getAttribute('data-link');

            if (link) {
                event.preventDefault();
                window.open(link, '_blank');
            } else if (button.classList.contains('scroll-to-table')) {
                const targetSection = document.getElementById('event-table');
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                event.preventDefault();
                alert('Thank you for your interest in registering! The registration link will be updated soon.');
            }
        });
    });
});
