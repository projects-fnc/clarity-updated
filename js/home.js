document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mainNav = document.getElementById('main-nav');
    const toggleIcon = mobileToggle.querySelector('i');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function() {
            // Toggle the 'active' class to show/hide the menu
            mainNav.classList.toggle('active');

            // Optional: Toggle icon between list (hamburger) and x (close)
            if (mainNav.classList.contains('active')) {
                toggleIcon.classList.remove('bi-list');
                toggleIcon.classList.add('bi-x-lg');
            } else {
                toggleIcon.classList.remove('bi-x-lg');
                toggleIcon.classList.add('bi-list');
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && !mobileToggle.contains(event.target)) {
            mainNav.classList.remove('active');
            toggleIcon.classList.remove('bi-x-lg');
            toggleIcon.classList.add('bi-list');
        }
    });
});