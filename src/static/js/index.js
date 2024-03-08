// SEARCH FOCUS HIDDEN MENU
document.getElementById('input_search').addEventListener('focus', function () {
    document.getElementById('menu_search').classList.remove('hidden');
});

document.getElementById('input_search').addEventListener('blur', function () {
    document.getElementById('menu_search').classList.add('hidden');
});
document.getElementById('input_search1').addEventListener('focus', function () {
    document.getElementById('menu_search1').classList.remove('hidden');
});

document.getElementById('input_search1').addEventListener('blur', function () {
    document.getElementById('menu_search1').classList.add('hidden');
});

function list_blog(value) {
    var list = document.getElementById('list_blog');
    var item = document.getElementById('item_blog');
    for (var i = 1; i < value; i++) {
        list.appendChild(item.cloneNode(true));
    }
}
function list_sell_phone(value) {
    var list = document.getElementById('list_sell_phone');
    var item = document.getElementById('item_sell_phone');
    for (var i = 1; i < value; i++) {
        list.appendChild(item.cloneNode(true));
    }
}
function list_sell_sound(value) {
    var list = document.getElementById('list_sell_sound');
    var item = document.getElementById('item_sell_sound');
    for (var i = 1; i < value; i++) {
        list.appendChild(item.cloneNode(true));
    }
}
function list_sell_accessory(value) {
    var list = document.getElementById('list_sell_accessory');
    var item = document.getElementById('item_sell_accessory');
    for (var i = 1; i < value; i++) {
        list.appendChild(item.cloneNode(true));
    }
}
function onLoad() {
    list_blog(3);
    list_sell_phone(10);
    list_sell_sound(5);
    list_sell_accessory(5);
}

window.onload = onLoad;

const scrollToTopButton =
    document.getElementById('scroll-to-top');

// Show button when user scrolls down
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}   