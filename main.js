let leftHalf = document.getElementById('left-half');
let rightHalf = document.getElementById('right-half');
let heart = document.getElementById("heart");
let flag = document.getElementById("flag");

heart.addEventListener('mouseover', () => {
    flag.style.opacity = '1';
}, false);

heart.addEventListener('mouseout', () => {
    flag.style.opacity = '0.05';
}, false);

leftHalf.addEventListener('mouseover', () => {
    leftHalf.style.width = '60%';
    rightHalf.style.width = '40%';
}, false);

rightHalf.addEventListener('mouseover', () => {
    leftHalf.style.width = '40%';
    rightHalf.style.width = '60%';
}, false);
