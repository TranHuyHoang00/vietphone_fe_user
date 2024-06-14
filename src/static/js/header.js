document.getElementById('input_search').addEventListener('focus', function () {
    document.getElementById('menu_search').classList.remove('hidden');
});

document.getElementById('input_search').addEventListener('blur', function () {
    document.getElementById('menu_search').classList.add('hidden');
});

function load_data_cart() {
    if (localStorage.carts_vietphone == undefined) {
        document.getElementById('cart_icon').innerHTML = `<span >0</span>`;
        return;
    } else {
        let quantity = check_cart(JSON.parse(localStorage.carts_vietphone));
        document.getElementById('cart_icon').innerHTML = `<span >${quantity}</span>`;
    }
}
function check_cart(carts_vietphone) {
    if (typeof (Storage) !== "undefined") {
        if (carts_vietphone) {
            if (carts_vietphone && carts_vietphone.length !== 0) {
                return carts_vietphone.length;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }
}
load_data_cart();