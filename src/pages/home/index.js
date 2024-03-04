var x2 = 0;
var next2 = document.getElementById('next2');
var prev2 = document.getElementById('prev2');
var slider2 = document.getElementById('slider2');
var item2 = document.getElementById('item2');
for (var i = 1; i < 10; i++) {
    slider2.appendChild(item2.cloneNode(true));
}
function goNext2() {
    x2 = x2 - 398;
    var slider2 = document.getElementById("slider2");
    if (Math.abs(x2) >= slider2.scrollWidth / 1.7) x2 = 0;
    slider2.style.transform = "translateX(" + x2 + "px)";
}
function goPrev2() {
    var slider2 = document.getElementById("slider2");
    if (Math.abs(x2) === 0) x2 = 0;
    else x2 = x2 + 398;
    slider2.style.transform = "translateX(" + x2 + "px)";
}
next2.addEventListener("click", goNext2);
prev2.addEventListener("click", goPrev2);

var x3 = 0;
var next3 = document.getElementById('next3');
var prev3 = document.getElementById('prev3');
var slider3 = document.getElementById('slider3');
var item3 = document.getElementById('item3');
for (var i = 1; i < 10; i++) {
    slider3.appendChild(item3.cloneNode(true));
}
function goNext3() {
    x3 = x3 - 398;
    var slider3 = document.getElementById("slider3");
    if (Math.abs(x3) >= slider3.scrollWidth / 1.7) x3 = 0;
    slider3.style.transform = "translateX(" + x3 + "px)";
}
function goPrev3() {
    var slider3 = document.getElementById("slider3");
    if (Math.abs(x3) === 0) x3 = 0;
    else x3 = x3 + 398;
    slider3.style.transform = "translateX(" + x3 + "px)";
}
next3.addEventListener("click", goNext3);
prev3.addEventListener("click", goPrev3);

var x4 = 0;
var next4 = document.getElementById('next4');
var prev4 = document.getElementById('prev4');
var slider4 = document.getElementById('slider4');
var item4 = document.getElementById('item4');
for (var i = 1; i < 10; i++) {
    slider4.appendChild(item4.cloneNode(true));
}
function goNext4() {
    x4 = x4 - 498;
    var slider4 = document.getElementById("slider4");
    if (Math.abs(x4) >= slider4.scrollWidth / 1.7) x4 = 0;
    slider4.style.transform = "translateX(" + x4 + "px)";
}
function goPrev4() {
    var slider4 = document.getElementById("slider4");
    if (Math.abs(x4) === 0) x4 = 0;
    else x4 = x4 + 498;
    slider4.style.transform = "translateX(" + x4 + "px)";
}
next4.addEventListener("click", goNext4);
prev4.addEventListener("click", goPrev4);




