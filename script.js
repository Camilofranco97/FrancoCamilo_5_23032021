const OpenNav = document.querySelector(".icon-menu")
const CloseNav = document.querySelector(".close")
const Menu = document.querySelector(".header-menu")

const PositionMenu = Menu.getBoundingClientRect().left;

OpenNav.addEventListener("click", () => {
    if(PositionMenu <0){
        Menu.classList.add("show")
    }
})

CloseNav.addEventListener("click", () => {
    if(PositionMenu <0){
        Menu.classList.remove("show")
    }
})