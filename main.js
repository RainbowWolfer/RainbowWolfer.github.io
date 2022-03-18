let leftHalf = document.getElementById('left-half');
let rightHalf = document.getElementById('right-half');
let heart = document.getElementById("heart");
let flag = document.getElementById("flag");
let scroll_div = document.getElementById("scroll_div");
let details = document.getElementsByClassName("detail");

heart.addEventListener('mouseover', () => {
    flag.style.opacity = '1';
}, false);

heart.addEventListener('mouseout', () => {
    flag.style.opacity = '0.05';
}, false);

leftHalf.addEventListener('mouseover', () => {
    leftHalf.style.width = '60%';
    rightHalf.style.width = '40%';
    scroll_div.style.overflowY = "hidden";

    for (const i of details) {
        i.style.opacity = 0;
        i.style.marginRight = "50px";
        i.style.transition = "all 0.2s";
    }
}, false);

rightHalf.addEventListener('mouseover', () => {
    leftHalf.style.width = '40%';
    rightHalf.style.width = '60%';
    scroll_div.style.overflowY = "scroll";
    for (let i = 0; i < details.length; i++) {
        details[i].style.transition = "all " + (i * 0.08) + "s";
    }
    for (const i of details) {
        i.style.opacity = 1;
        i.style.marginRight = "0px";
    }
}, false);

