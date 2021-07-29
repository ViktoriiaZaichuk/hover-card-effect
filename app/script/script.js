/* TEXT ANIMATION */
const tm01 = document.getElementById("marquee-content1");
document.getElementById("tm01").appendChild(tm01.cloneNode(true));
document.getElementById("tm01").appendChild(tm01.cloneNode(true));



/* CURSOR */
let mouseCursor = document.querySelector('.cursor');
let hoverLinks = document.querySelectorAll('.hover-img');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
};

hoverLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
    });
});