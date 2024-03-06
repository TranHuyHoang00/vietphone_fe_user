function list_sell_phone(value) {
    var list = document.getElementById('list_sell_phone');
    var item = document.getElementById('item_sell_phone');
    for (var i = 1; i < value; i++) {
        list.appendChild(item.cloneNode(true));
    }
}
function onLoad() {
    list_sell_phone(10);
}

window.onload = onLoad;