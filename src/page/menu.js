import cheeseBugger from "./img/Cheeseburger.png"
import hotDog from "./img/Hot dogs.png"
import nachos from "./img/Nachos.png"
import poBoy from "./img/Poboy.png"

export function Menu () {
    const divContent = document.querySelector("#content")
    const elements = {
        menuHeader: document.createElement("h1"),
        menuGrid: document.createElement("div")
    }

    const products = [
        {
            name: "Cheese Bugger",
            description: "A playful, quirky term for a delicious cheeseburger, typically made with a juicy beef patty, melted cheese, and all the classic burger fixings.",
            image: cheeseBugger
        },
        {
            name: "Hot Dogs",
            description: "savory, grilled or boiled sausages typically served in a soft bun, often topped with condiments like mustard, ketchup, onions, relish, or sauerkraut.",
            image: hotDog
        },
        {
            name: "Nachos",
            description: " Popular snack made from tortilla chips topped with melted cheese, and often accompanied by other toppings like jalapeños, sour cream, guacamole, and salsa.",
            image: nachos
        },
        {
            name: "Po'boy",
            description: "A traditional Louisiana sandwich made with a crispy baguette-like roll filled with various fillings, such as fried seafood, roast beef, or chicken, often topped with lettuce, tomato, pickles, and mayo.",
            image: poBoy
        }

    ]

    for (const item of products){
        const itemDiv = document.createElement("div")
        const itemName = document.createElement("name")
        const itemDesc = document.createElement("p")
        const itemImg = new Image(200)


        itemName.textContent = item.name
        itemDesc.textContent = item.description
        itemImg.src = item.image

        itemDiv.appendChild(itemName)
        itemDiv.appendChild(itemDesc)
        itemDiv.appendChild(itemImg)

        elements.menuGrid.appendChild(itemDiv)
    }

    elements.menuHeader.textContent = "Restaurant Menu"

    for (const element in elements){
        divContent.appendChild(elements[element])
    }
}