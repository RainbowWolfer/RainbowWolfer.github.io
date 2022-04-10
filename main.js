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

function onProjectClick(event) {
    let split = event.split('-');
    let name = split[1];
    switch (name) {
        case "MineSweeper":
            window.open("https://github.com/RainbowWolfer/Mine-Sweeper", "_blank");
            break;
        case "Reversi":
            // window.open("", "_blank");
            break;
        case "EquestiaCN":
            window.open("https://github.com/RainbowWolfer/EquestriaCN_Test", "_blank");
            break;
        case "FronLine":
            window.open("https://github.com/RainbowWolfer/FrontLine", "_blank");
            break;
        case "ChineseChess":
            window.open("https://github.com/RainbowWolfer/ChineseChess2", "_blank");
            break;
        case "DesktopImmersiveClock":
            window.open("https://github.com/RainbowWolfer/DesktopImmersiveClock", "_blank");
            break;
        case "CARDS":
            // window.open("", "_blank");
            break;
        case "TowerDefence":
            window.open("https://github.com/RainbowWolfer/TowerDefence", "_blank");
            break;
        case "E621":
            window.open("https://github.com/RainbowWolfer/E621Downloader", "_blank");
            break;
        case "CodesAnalyzer":
            window.open("https://github.com/RainbowWolfer/CodeAnalyze", "_blank");
            break;
        case "MindMap":
            window.open("https://github.com/RainbowWolfer/MindMap", "_blank");
            break;
        case "LYLG":
            // window.open("", "_blank");
            break;
        default:
            break;
    }
}