// ---------------------SLIDING FEATURE WHEN VIEWED from down to up -----------------------------
// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Function to add the 'visible' class when the element is in the viewport
function checkVisibility() {
    const elements = document.querySelectorAll('.slide-up-content');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Listen for scroll and resize events
window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

// Initial check in case the element is already in view when the page loads
document.addEventListener('DOMContentLoaded', checkVisibility);


// -------------ABOUT ME-------------------
function opentab(event,tabName) {
    var i, tabcontents, tablinks;
    
    // Hide all tab contents
    tabcontents = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    
    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Show the current tab content and add the active class to the clicked tab link
    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active");
}
