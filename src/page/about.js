import poboy from "./img/Poboy.png"

export function About (){
    const divContent = document.querySelector("#content")

    const elements = {
        aboutHeader: document.createElement("h2"),
        aboutParagraph: document.createElement("p"),
        aboutImg: new Image(150)
    }

    elements.aboutHeader.textContent = "About Us"
    elements.aboutImg.src = poboy
    elements.aboutParagraph.textContent = "Welcome to my restaurant page where exceptional flavors meet a cozy, inviting atmosphere. Our menu features a delightful mix of classic dishes and innovative creations, all made with the freshest ingredients. Whether you're here for a casual meal or a special occasion, we promise a dining experience that will leave you coming back for more. Come join us and discover the taste of something truly special!"
    



    for (const element in elements){
        divContent.appendChild(elements[element])
    }
}