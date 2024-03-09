function list_phone(value) {
    var list = document.getElementById('list_phone');
    var item = document.getElementById('item_phone');
    for (var i = 1; i < value; i++) {
        list.appendChild(item.cloneNode(true));
    }
}
function onLoad() {
    list_phone(6);
}

window.onload = onLoad;