import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.mySwiper', {
        spaceBetween: 12,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    const swiper2 = new Swiper('.mySwiper2', {
        loop: true,
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });
});
