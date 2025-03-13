import poBoy from "./img/Poboy.png"

export function Home (){
    const divContent = document.querySelector("#content")

    const elements = {
        homeHead: document.createElement("h1"),
        homeImg: new Image(250),
        homeParagraph: document.createElement("p")
    }

    elements.homeHead.textContent = "Welcome to my Restaurant Page"
    elements.homeImg.src = poBoy
    elements.homeParagraph.textContent = "Explore my menu and see variety of food stuffs"
    elements.homeImg.style.float = "center"

    for (const element in elements){
        divContent.appendChild(elements[element])
    }
}