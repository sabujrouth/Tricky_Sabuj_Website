// Navbar style change using javascript

/* This code snippet is adding an event listener to the window object for the 'scroll' event. When the
user scrolls the page, the callback function is executed. */
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
})


// show/hide faq answer

/* This code snippet is selecting all elements with the class name 'faq' using
`document.querySelectorAll('.faq')`. It then iterates over each of these elements using `forEach`,
and adds a click event listener to each 'faq' element. */
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        // change icon
        const icon = faq.querySelector('.faq_icon i')
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

// Show/Hide Nav Menu

/* This code snippet is selecting elements from the DOM and adding an event listener to the `menuBtn`
element. When the `menuBtn` is clicked, it changes the CSS `display` property of the `menu`,
`closeBtn`, and `menuBtn` elements to control the visibility of the navigation menu. Specifically,
it sets the `menu` to be displayed as a flex container, shows the `closeBtn`, and hides the
`menuBtn`. This functionality allows the navigation menu to be shown when the user clicks on the
designated button. */
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu
/**
 * The function `closeNav` hides the menu, close button, and displays the menu button when the close
 * button is clicked.
 */
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)