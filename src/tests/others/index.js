let x_slider_prod = 0;
function next_item_prod() {
    x_slider_prod = x_slider_prod - 398;
    var slider = document.getElementById("slider_item_prod");
    if (Math.abs(x_slider_prod) >= slider.scrollWidth / 1.7) x_slider_prod = 0;
    slider.style.transform = "translateX(" + x_slider_prod + "px)";
}
function prev_item_prod() {
    var slider = document.getElementById("slider_item_prod");
    if (Math.abs(x_slider_prod) === 0) x_slider_prod = 0;
    else x_slider_prod = x_slider_prod + 398;
    slider.style.transform = "translateX(" + x_slider_prod + "px)";
}