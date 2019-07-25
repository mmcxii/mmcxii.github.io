//* RevealTopBtn Observer
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

//* SlideIn Observer
const sliders = document.querySelectorAll('.slide-in');

const slideInOptions = {
    rootMargin: '0px 0px -100px 0px',
};

const slideInObserver = new IntersectionObserver((entries, slideInObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            slideInObserver.unobserve(entry.target);
        }
    });
}, slideInOptions);

sliders.forEach((slider) => {
    slideInObserver.observe(slider);
});
