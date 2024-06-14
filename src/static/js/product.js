var data_filters = {
    page: 1,
    limit: 3,
    search: '',
    tag: '',
    product_brand: '',
    is_active: '',
    category: '',
    has_page: '',
    ordering: 'title',
}
function load_data_filters() {
    get_data_brands();
    function get_data_brands() {
        fetch(`https://stg.vietphone.vn/product/api/v1/list-brand?page=1&limit=100`)
            .then(response => { return response.json(); })
            .then(data => { load_data_brands(data); load_data_brands_mobie(data) })
            .catch(error => { console.error(error); });
    };
    function load_data_brands(data) {
        if (data && data.success == 1) {
            let data_brands = data.data.brands;
            let display_data_brands = document.getElementById('display_data_brands');
            data_brands.forEach(function (brand, index) {
                var div = document.createElement('div');
                div.innerHTML = `
                        <div class="flex items-center space-x-[5px]">
                            <input type="radio" id="${brand.id}" name="brand" value="${brand.id}" class="border rounded-[5px]" >
                            <span class="line-clamp-1">${brand.name}</span>
                        </div>
                    `
                var input = div.querySelector('input[name="brand"]');
                input.addEventListener('change', function (event) {
                    if (event.target.checked) {
                        data_filters.product_brand = brand.id;
                        data_filters.page = 1;
                        load_data_products();

                    }
                });
                display_data_brands.appendChild(div);
            });
        }
    }
    function load_data_brands_mobie(data) {
        if (data && data.success == 1) {
            let data_brands = data.data.brands;
            let display_data_brands_mobie = document.getElementById('display_data_brands_mobie');

            data_brands.forEach(function (brand, index) {
                var div = document.createElement('div');
                div.innerHTML = `
                        <div class="flex items-center space-x-[5px]">
                            <input type="radio" id="${brand.id}" name="brand_mobie" value="${brand.id}" class="border rounded-[5px]" >
                            <span class="line-clamp-1">${brand.name}</span>
                        </div>
                    `
                var input = div.querySelector('input[name="brand_mobie"]');
                input.addEventListener('change', function (event) {
                    if (event.target.checked) {
                        data_filters.product_brand = brand.id;
                        data_filters.page = 1;
                        load_data_products();
                    }
                });
                display_data_brands_mobie.appendChild(div);
            });
        }
    }
    get_data_categorys();
    function get_data_categorys() {
        fetch(`https://stg.vietphone.vn/product/api/v1/list-category?page=1&limit=100`)
            .then(response => { return response.json(); })
            .then(data => { load_data_categorys(data); load_data_categorys_mobie(data); })
            .catch(error => { console.error(error); });
    };
    function load_data_categorys(data) {
        let display_data_categorys = document.getElementById('display_data_categorys');
        if (data && data.success == 1) {
            let data_categorys = data.data.categories;
            data_categorys.forEach(function (category, index) {
                var div = document.createElement('div');
                div.innerHTML = `
                    <div class="flex items-center space-x-[5px]">
                        <input type="radio" id="${category.id}" name="category" value="${category.id}" class="border rounded-[5px]" >
                        <span class="line-clamp-1">${category.name}</span>
                    </div>
                `
                var input = div.querySelector('input[name="category"]');
                input.addEventListener('change', function (event) {
                    if (event.target.checked) {
                        data_filters.category = category.id;
                        data_filters.page = 1;
                        load_data_products();
                    }
                });
                display_data_categorys.appendChild(div);
            });
        }
    }
    function load_data_categorys_mobie(data) {
        let display_data_categorys_mobie = document.getElementById('display_data_categorys_mobie');
        if (data && data.success == 1) {
            let data_categorys = data.data.categories;
            data_categorys.forEach(function (category, index) {
                var div = document.createElement('div');
                div.innerHTML = `
                    <div class="flex items-center space-x-[5px]">
                        <input type="radio" id="${category.id}" name="category_mobie" value="${category.id}" class="border rounded-[5px]" >
                        <span class="line-clamp-1">${category.name}</span>
                    </div>
                `
                var input = div.querySelector('input[name="category_mobie"]');
                input.addEventListener('change', function (event) {
                    if (event.target.checked) {
                        data_filters.category = category.id;
                        data_filters.page = 1;
                        load_data_products();
                    }
                });
                display_data_categorys_mobie.appendChild(div);
            });
        }
    }
    get_data_tags();
    function get_data_tags() {
        fetch(`https://stg.vietphone.vn/product/api/v1/list-tag?page=1&limit=100`)
            .then(response => { return response.json(); })
            .then(data => { load_data_tags(data); load_data_tags_mobie(data); })
            .catch(error => { console.error(error); });
    };
    function load_data_tags(data) {
        let display_data_tags = document.getElementById('display_data_tags');
        if (data && data.success == 1) {
            let data_tags = data.data.tags;
            data_tags.forEach(function (tag, index) {
                var div = document.createElement('div');
                div.innerHTML = `
                    <div class="flex items-center space-x-[5px]">
                        <input type="radio" id="${tag.id}" name="tag" value="${tag.id}" class="border rounded-[5px]" >
                        <span class="line-clamp-1">${tag.name}</span>
                    </div>
                `
                var input = div.querySelector('input[name="tag"]');
                input.addEventListener('change', function (event) {
                    if (event.target.checked) {
                        data_filters.tag = tag.id;
                        data_filters.page = 1;
                        load_data_products();

                    }
                });
                display_data_tags.appendChild(div);
            });
        }
    }
    function load_data_tags_mobie(data) {
        let display_data_tags_mobie = document.getElementById('display_data_tags_mobie');
        if (data && data.success == 1) {
            let data_tags = data.data.tags;
            data_tags.forEach(function (tag, index) {
                var div = document.createElement('div');
                div.innerHTML = `
                    <div class="flex items-center space-x-[5px]">
                        <input type="radio" id="${tag.id}" name="tag_mobie" value="${tag.id}" class="border rounded-[5px]" >
                        <span class="line-clamp-1">${tag.name}</span>
                    </div>
                `
                var input = div.querySelector('input[name="tag_mobie"]');
                input.addEventListener('change', function (event) {
                    if (event.target.checked) {
                        data_filters.tag = tag.id;
                        data_filters.page = 1;
                        load_data_products();

                    }
                });
                display_data_tags_mobie.appendChild(div);
            });
        }
    }
}
function load_data_products() {
    let btn_load_more_product = document.getElementById('btn_load_more_product');
    let display_data_products = document.getElementById('display_data_products');
    let display_none_data_products = document.getElementById('display_none_data_products');
    let effect_loading_data = document.getElementById('effect_loading_data');
    get_data_products();

    function get_data_products() {
        if (data_filters.page == 1) {
            display_data_products.innerHTML = ``;
        }
        effect_loading_data.classList.remove('hidden');
        display_none_data_products.classList.add('hidden');
        btn_load_more_product.classList.add('hidden');
        fetch(`https://stg.vietphone.vn/api/v1/list-product-page?page=${data_filters.page}&limit=${data_filters.limit}${data_filters.search === '' ? '' : `&search=${data_filters.search}`}${data_filters.product_brand === '' ? '' : `&product_brand=${data_filters.product_brand}`}${data_filters.tag === '' ? '' : `&tag=${data_filters.tag}`}${data_filters.category === '' ? '' : `&category=${data_filters.category}`}${data_filters.is_active === '' ? '' : `&is_active=${data_filters.is_active}`}${data_filters.category === '' ? '' : `&category=${data_filters.category}`}${data_filters.has_page === '' ? '' : `&has_page=${data_filters.has_page}`}${data_filters.ordering === '' ? '' : `&ordering=${data_filters.ordering}`}`)
            .then(response => { return response.json(); })
            .then(data => { load_data_products(data); })
            .catch(error => { console.log(error); });
    };
    function load_data_products(data) {
        display_data_products.classList.remove('hidden');
        display_data_products.classList.add('grid');
        if (data && data.success == 1) {
            let data_products = data.data.product_pages;
            if (data_products.length !== 0) {
                effect_loading_data.classList.add('hidden');
                btn_load_more_product.classList.remove('hidden');
                function loadTemplatesToDiv() {
                    data_products.forEach(item => {
                        var data_tags = '';
                        item.product && item.product.tags && item.product.tags.length !== 0 && item.product.tags.forEach(function (tag) {
                            data_tags += `
                            <small class="rounded-[5px] bg-indigo-600 px-[12px] py-[6px] text-white">
                                ${tag.name}
                            </small>
                        `;
                        });
                        var variants = item.product.variants;
                        var data_prices = '';
                        function format_money(price) {
                            return parseFloat(price).toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&,') + 'đ';
                        }
                        if (variants.length !== 0 && variants[0]) {
                            var variant = variants[0];
                            data_prices = check_price(variant);

                        }
                        function check_price(variant) {
                            if ((variant.discount_price == variant.regular_price)) {
                                return `
                                    <span class="text-[#d70018]">${format_money(variant.discount_price)}</span>
                                `;
                            }
                            if ((variant.discount_price == 0 || variant.discount_price == null || variant.discount_price == '')) {
                                return `
                                    <span class="text-[#d70018]">${format_money(variant.regular_price)}</span>
                                `;
                            }
                            if (variant.discount_price < variant.regular_price) {
                                return `
                                    <span class="text-[#d70018]">${format_money(variant.discount_price)}</span>
                                    <small class="text-[#707070] line-through">${format_money(variant.regular_price)}</small>
                                `;
                            }
                        }
                        function split_url_path(url_path) {
                            return url_path.substring(url_path.indexOf('/viet-phone') + '/viet-phone'.length);
                        }
                        var html = `
                        <a href="${split_url_path(item.url_path)}" class="bg-white shadow-md border hover:border-red-600 p-[10px] rounded-[5px] transition duration-500 ease-in-out group space-y-[10px]">
                            <div class="relative aspect-square">
                                <img
                                    class="w-full h-full object-cover rounded-[5px]" 
                                    alt="${item.slug}"
                                    src="${(item.product && item.product.media && item.product.media.length !== 0 && item.product.media[0]) ? item.product.media[0].image : '../../static/images/image-not-found.png'}"
                                    title="${item.title}"
                                />
                                <div class="bottom-0 left-0 absolute">
                                    <div class="flex flex-wrap gap-[5px]">
                                        ${data_tags}
                                    </div>
                                </div>
                            </div>
                        <div class="space-y-[5px]">
                            <div class="text-start font-medium line-clamp-1 group-hover:text-blue-600 group-hover:underline">
                                <h1>${item.title}</h1>
                            </div>
                            <div class="flex items-center justify-between flex-wrap font-medium">
                                ${data_prices}
                            </div>
                            <div class="flex items-center justify-between">
                                <small class="">
                                    <i class="fa-solid fa-money-check-dollar text-orange-500"></i>
                                    <span class="font-[600] underline">180 bán</span>
                                </small>
                                <small class="">
                                    <i class="fa-solid fa-heart text-red-500"></i>
                                    <span class="font-[600] underline">1.2k thích</span>
                                </small>
                            </div>
                            <div class="flex items-center">
                                <span class="fa fa-star text-orange-500"></span>
                                <span class="fa fa-star text-orange-500"></span>
                                <span class="fa fa-star text-orange-500"></span>
                                <span class="fa fa-star text-orange-500"></span>
                                <span class="fa fa-star text-orange-500"></span>
                            </div>
                        </div>
                        <button class="w-full bg-[#cd1818] group-hover:bg-red-600 py-[5px] transition duration-600 ease-in-out rounded-[5px] text-white">
                            <i class="fa-solid fa-credit-card"></i>
                            <small>Mua ngay</small>
                        </button>
                    </a>
                    `;
                        display_data_products.insertAdjacentHTML('beforeend', html);
                    });
                }
                loadTemplatesToDiv();
            } else {
                effect_loading_data.classList.add('hidden');
                display_data_products.classList.remove('grid');
                display_data_products.classList.add('hidden');
                display_none_data_products.classList.remove('hidden');
                btn_load_more_product.classList.add('hidden');
            }
        } else {
            effect_loading_data.classList.add('hidden');
            btn_load_more_product.classList.add('hidden');
        }
    }
}
// EVENT LOAD MORE PRODUCT
btn_load_more_product.addEventListener('click', function () {
    data_filters.page += data_filters.page;
    load_data_products();
});
// EVENT CHECK INPUT RADIO ALL
var input_all_tags = document.getElementById('input_all_tags');
var input_all_brands = document.getElementById('input_all_brands');
var input_all_categorys = document.getElementById('input_all_categorys');
var input_all_tags_mobie = document.getElementById('input_all_tags_mobie');
var input_all_brands_mobie = document.getElementById('input_all_brands_mobie');
var input_all_categorys_mobie = document.getElementById('input_all_categorys_mobie');
input_all_tags.addEventListener('change', function (event) {
    if (event.target.checked) {
        data_filters.tag = '';
        data_filters.page = 1;
        load_data_products();

    }
});
input_all_brands.addEventListener('change', function (event) {
    if (event.target.checked) {
        data_filters.product_brand = '';
        data_filters.page = 1;
        load_data_products();

    }
});
input_all_categorys.addEventListener('change', function (event) {
    if (event.target.checked) {
        data_filters.category = '';
        data_filters.page = 1;
        load_data_products();

    }
});
input_all_tags_mobie.addEventListener('change', function (event) {
    if (event.target.checked) {
        data_filters.tag = '';
        data_filters.page = 1;
        load_data_products();

    }
});
input_all_brands_mobie.addEventListener('change', function (event) {
    if (event.target.checked) {
        data_filters.product_brand = '';
        data_filters.page = 1;
        load_data_products();

    }
});
input_all_categorys_mobie.addEventListener('change', function (event) {
    if (event.target.checked) {
        data_filters.category = '';
        data_filters.page = 1;
        load_data_products();

    }
});
// EVENT CLICK DROPDOWN MENU
var dropdown_item_filter = document.querySelectorAll('.dropdown_item_filter');
var name_menu_dropdown = document.getElementById('name_menu_dropdown');
dropdown_item_filter.forEach(item => {
    item.addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        name_menu_dropdown.textContent = this.textContent;
        data_filters.ordering = value;
        data_filters.page = 1;
        load_data_products();
    });
});

function onLoad() {
    load_data_filters();
    load_data_products();
}

window.onload = onLoad;