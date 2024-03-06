

function items_carouse_sell_device(value) {
    var slider = document.getElementById('slider_sell_device');
    var item = document.getElementById('item_sell_sound');
    for (var i = 1; i < value; i++) {
        item.id = 'item' + i;
        slider.appendChild(item.cloneNode(true));
    }
}

// var x_sell_device_sell_device = 0;
// function nex_sell_devicet_sell_device() {
//     x_sell_device = x_sell_device - 498;
//     var slider_sell_device = document.getElementById("slider_sell_device");
//     if (Math.abs(x_sell_device) >= slider_sell_device.scrollWidth / 1.7) x_sell_device = 0;
//     slider_sell_device.style.transform = "translatex(" + x_sell_device + "px_sell_device)";
// }
// function prev_sell_device() {
//     var slider_sell_device = document.getElementById("slider_sell_device");
//     if (Math.abs(x_sell_device) === 0) x_sell_device = 0;
//     else x_sell_device = x_sell_device + 498;
//     slider_sell_device.style.transform = "translatex(" + x_sell_device + "px_sell_device)";
// }
var x_sell_device = 0;
function next_sell_device() {
    x_sell_device = x_sell_device - 498;
    var slider_sell_device = document.getElementById("slider_sell_device");
    if (Math.abs(x_sell_device) >= slider_sell_device.scrollWidth / 1.7) x_sell_device = 0;
    slider_sell_device.style.transform = "translateX(" + x_sell_device + "px)";
}
function prev_sell_device() {
    var slider_sell_device = document.getElementById("slider_sell_device");
    if (Math.abs(x_sell_device) === 0) x_sell_device = 0;
    else x_sell_device = x_sell_device + 498;
    slider_sell_device.style.transform = "translateX(" + x_sell_device + "px)";
}

function onLoad() {
    items_carouse_sell_device(10);
}

window.onload = onLoad;