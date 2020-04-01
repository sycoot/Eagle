function openMenu() {
    let menu = document.querySelector("nav#menu");
    if(menu.style.right != "0%") {
        menu.style.right = "0%";
    } else {
        menu.style.right = "-100%";
    }
}