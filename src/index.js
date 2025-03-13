import "./styles.css"
import { Home } from "./page/home.js"
import { Menu } from "./page/menu.js"
import { About } from "./page/about.js"

(function Resturant(){
    const divContent = document.querySelector("#content")
    const homeBtn = document.querySelector("#but1")
    const menuBtn = document.querySelector("#but2")
    const aboutBtn = document.querySelector("#but3")

    function clearContent (){
        divContent.innerHTML = ""
    }

    homeBtn.addEventListener("click", () => {
        clearContent()
        Home()
    })

    menuBtn.addEventListener("click", () => {
        clearContent()
        Menu()
    })

    aboutBtn.addEventListener("click", () => {
        clearContent()
        About()
    })

    Home()

})()