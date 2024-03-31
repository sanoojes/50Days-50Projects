const bg = document.querySelector(".bg");
const text = document.querySelector(".text");

let load = 0;
let number = setInterval(bluring, 30);

function bluring() {
    load++;
    if (load > 99) clearInterval(number);
    text.innerHTML = `${load}%`;

    text.style.opacity = scale(load, 0, 100, 0.9, 0);

    bg.style.filter = `blur(${scale(load, 0, 100, 100, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
