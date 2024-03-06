var glide03 = new Glide('.glide-03', {
    type: 'carousel',
    focusAt: 'center',
    perView: 3,
    autoplay: 3000,
    animationDuration: 700,
    gap: 24,
    classes: {
        activeNav: '[&>*]:bg-slate-700',
    },
    breakpoints: {
        1024: {
            perView: 2
        },
        640: {
            perView: 1
        }
    },
});

glide03.mount();