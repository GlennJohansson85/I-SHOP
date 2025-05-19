document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.toggler');

    function checkScreenWidth() {
        if (window.innerWidth < 992) { // Adjust to your desired breakpoint
            toggler.classList.add('show');
        } else {
            toggler.classList.remove('show');
        }
    }

    window.addEventListener('resize', checkScreenWidth);
    checkScreenWidth(); // Call on load to check initial width
});