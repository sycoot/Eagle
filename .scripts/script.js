let focusInput = document.querySelectorAll("input[type=button]");
let focusButton = document.querySelector("nav#menu button");
let focusB2 = document.querySelector(".close");
let focusAButton = document.querySelectorAll("section button");
let focusArticle = document.querySelectorAll("article");
focusButton.setAttribute("tabindex", "-1");
focusB2.setAttribute("tabindex", "-1")
for(var i = 0; i < focusInput.length; i++) {
    focusInput[i].setAttribute("tabindex" , "-1");
}

function DisplayItem(header, para) {
    let overlay = document.querySelector("div#itemOverlay");
    let h2 = document.querySelector("div#itemOverlay article h2");
    let p = document.querySelector("div#itemOverlay article p");
    if(overlay.style.display == "flex") {
        h2.innerHTML = "";
        p.innerHTML = "";
        focusB2.setAttribute("tabindex", "-1")
        overlay.style.display = "none";
        for (let index = 0; index < focusAButton.length; index++) {
            focusAButton[index].setAttribute("tabindex", "0");
        }
        for (let index = 0; index < focusButton.length; index++) {
            focusButton[index].setAttribute("tabindex", "0");
        }
    } else {
        overlay.style.display = "flex";
        focusB2.setAttribute("tabindex", "0");
        h2.innerHTML = header;
        p.innerHTML = para;
        for (let index = 0; index < focusAButton.length; index++) {
            focusAButton[index].setAttribute("tabindex", "-1");
        }
        for (let index = 0; index < focusButton.length; index++) {
            focusButton[index].setAttribute("tabindex", "-1");
        }
    }
}

function openMenu() {
    let menu = document.querySelector("nav#menu");
    displayOverlay();
    if(menu.style.right != "0%") {
        menu.style.right = "0%";
        for(var i = 0; i < focusInput.length; i++) {
            focusInput[i].setAttribute("tabindex" , "0");
        }
        focusButton.setAttribute("tabindex", "0");
    } else {
        menu.style.right = "-100%";
        for(var i = 0; i < focusInput.length; i++) {
            focusInput[i].setAttribute("tabindex" , "-1"); 
        }
        focusButton.setAttribute("tabindex", "-1");
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
