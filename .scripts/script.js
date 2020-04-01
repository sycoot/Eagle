function openMenu() {
    let menu = document.querySelector("nav#menu");
    displayOverlay();
    if(menu.style.right != "0%") {
        menu.style.right = "0%";
    } else {
        menu.style.right = "-100%";
    }
}
function displayOverlay() {
    let overlay = document.querySelector("span#overlay");
    if(overlay.style.left != "0%") {
        overlay.style.left = "0%";
    } else {
        overlay.style.left = "-100%";
    }
}
let main = document.querySelector("main");
function scrollToMain() {
    main.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
let header = document.querySelector("header");
function scrollToHeader() {
    header.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
