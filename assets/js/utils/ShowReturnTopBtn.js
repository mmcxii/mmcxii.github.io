const returnTopBtn = document.querySelector('.return-top-btn');
const header = document.querySelector('#top');

const revealBtnObserver = new IntersectionObserver((header) => {
    // When the header is no longer visable, reveal the button
    if (!header[0].isIntersecting) {
        returnTopBtn.classList.add('visable');

        // When the header is visable, hide the button
    } else {
        returnTopBtn.classList.remove('visable');
    }
});

revealBtnObserver.observe(header);
