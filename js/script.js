// *burger menu 
const burgerButton = document.querySelector(".burger_menu_btn");
const burgerIcon = document.querySelector(".burger_menu_icon");
const headerContentMobile = document.querySelector(".header_content_mobile");
burgerButton.addEventListener("click", () => {
    burgerIcon.classList.toggle("burger_menu_icon_active");
    headerContentMobile.classList.toggle("open_content_mobile");
});

// *popup 
const popupButtons = document.querySelectorAll(".popup_open");
const image = document.querySelector(".first_screen_bg");
const popupOne = document.querySelector(".popup_one");
const popupTwo = document.querySelector(".popup_second");
popupButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        image.classList.toggle("blur");
        popupOne.classList.toggle("hiden");
        window.scrollTo(pageXOffset, 0);
        
    })
})
const popups = document.querySelectorAll(".popup");
document.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        popups.forEach((popup) => {
            popup.classList.add("hiden");
        })
        image.classList.remove("blur");
    }
})
