$(document).ready(function() {
    // Find the link by its ID
    const scrollToTopLink = $('#scrollToTopBtn');

    // Add a click event listener to the link
    scrollToTopLink.on('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior (scrolling to "#top")
        
        // Scroll to the top smoothly
        $('html, body').animate({
            scrollTop: 0
        }, 800); // Adjust the duration as needed (in milliseconds)
    });
});
