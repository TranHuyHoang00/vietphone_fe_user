const more_posts = document.getElementById('more_posts');
const btn_show_posts = document.getElementById('btn_show_posts');
const btn_hide_posts = document.getElementById('btn_hide_posts');
btn_show_posts.addEventListener('click', () => {
    more_posts.classList.toggle('hidden');
    btn_show_posts.classList.toggle('hidden');
    btn_hide_posts.classList.toggle('hidden');
});
btn_hide_posts.addEventListener('click', () => {
    more_posts.classList.toggle('hidden');
    btn_show_posts.classList.toggle('hidden');
    btn_hide_posts.classList.toggle('hidden');
});






function carouse_img_prod(value) {
    var slider = document.getElementById('slider_img_prod');
    var item = document.getElementById('item_img_prod');
    for (var i = 1; i < value; i++) {
        slider.appendChild(item.cloneNode(true));
    }
}
var x_img_prod = 0;
function next_img_prod() {
    x_img_prod = x_img_prod - 498;
    var slider_img_prod = document.getElementById("slider_img_prod");
    if (Math.abs(x_img_prod) >= slider_img_prod.scrollWidth / 1.7) x_img_prod = 0;
    slider_img_prod.style.transform = "translateX(" + x_img_prod + "px)";
}
function prev_img_prod() {
    var slider_img_prod = document.getElementById("slider_img_prod");
    if (Math.abs(x_img_prod) === 0) x_img_prod = 0;
    else x_img_prod = x_img_prod + 498;
    slider_img_prod.style.transform = "translateX(" + x_img_prod + "px)";
}

function onLoad() {
    carouse_img_prod(5);
}

window.onload = onLoad;