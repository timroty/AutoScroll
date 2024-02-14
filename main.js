let scrollSpeed = 50; // Lower is quicker. Controls the timeout
let scrollBy = 10;

let scrollTimeout;

function autoScroll() {
    // Scroll down by a small amount
    window.scrollBy(0, scrollBy);
    // If we haven't reached the bottom of the page yet, continue scrolling
    if (window.scrollY < document.body.scrollHeight - window.innerHeight) {
        scrollTimeout = setTimeout(autoScroll, scrollSpeed);
    }
}

function stopAutoScroll() {
    clearTimeout(scrollTimeout);
}

window.onload = function() {
    autoScroll();
};
