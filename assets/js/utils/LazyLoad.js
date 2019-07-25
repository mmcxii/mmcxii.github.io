const imgs = document.querySelectorAll('[data-src]');

const lazyLoadOptions = {
    rootMargin: '0px 0px 200px 0px',
};

const lazyLoader = new IntersectionObserver((entries, lazyLoader) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            loadImage(entry.target);
            lazyLoader.unobserve(entry.target);
        }
    });
}, lazyLoadOptions);

function loadImage(img) {
    const src = img.getAttribute('data-src');

    if (!src) {
        return;
    }

    img.src = src;
}

imgs.forEach((img) => {
    lazyLoader.observe(img);
});
