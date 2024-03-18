let sob = document.querySelectorAll(".img");
// let images = [...document.querySelectorAll(".img")];
let images = [...sob];
console.log(images);
let slider = document.querySelector(".slider");
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = 0.05;

window.addEventListener("resize", init);

function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    console.log(sliderWidth);
    imageWidth = sliderWidth / images.length;
    // console.log(imageWidth);

    let innerH = window.innerHeight;
    // console.log(innerH);
    letinnerW = window.innerWidth;
    // console.log(letinnerW);
    let what = `${sliderWidth - (letinnerW - innerH)}`;
    // console.log(what);
    document.body.style.height = `${sliderWidth - (letinnerW - innerH)}px`;
    // document.body.style.height = `2000px`
    // document.body.style.height = `${what}px`
    // document.body.style.height = `${sliderWidth}`
}

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}
// let result =  lerp(0, 10, .05)
// console.log(result);

function setTransform(el, transform) {
    el.style.transform = transform;
}

function animate() {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    // current =lerp(current, target, ease);
    // console.log(current);
    target = window.scrollY;
    // console.log(target);
    setTransform(slider, `translateX(-${current}px)`);
    animateImages();
    requestAnimationFrame(animate);
}

images.forEach((img, idx) => {
    img.style.background = `url(./images/${idx + 1}.jpg)`;
});

function animateImages() {
    let ratio = current / imageWidth;
    console.log(ratio);
    let intersectionRatioValue;

    images.forEach((image, idx) => {
        intersectionRatioValue = ratio - idx * 0.7;
        setTransform(image, `translateX(${intersectionRatioValue * 70}px)`);
    });
}

init();
animate();
