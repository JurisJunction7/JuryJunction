document.addEventListener("DOMContentLoaded", function() {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation class when the element is in the viewport
    function addAnimationClass() {
        var aboutSection = document.querySelector('.about-section');
        if (isInViewport(aboutSection)) {
            aboutSection.classList.add('animate');
        }
    }

    // Initial check for animation on page load
    addAnimationClass();

    // Listen for scroll events and check for animation when the user scrolls
    window.addEventListener('scroll', function() {
        addAnimationClass();
    });

    // Additional on-scroll animation
    var lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // Scroll down
            var aboutSection = document.querySelector('.about-section');
            if (isInViewport(aboutSection)) {
                aboutSection.classList.add('scroll-down');
            }
        } else {
            // Scroll up
            var aboutSection = document.querySelector('.about-section');
            if (isInViewport(aboutSection)) {
                aboutSection.classList.add('scroll-up');
            }
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
});
