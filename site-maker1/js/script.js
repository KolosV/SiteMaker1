"use strict";
let buttonsAdd = document.querySelectorAll(".add-btn")
console.log(buttonsAdd)

for(let button of buttonsAdd)
  button.addEventListener("click", function(event) {
    let eventElement = event.target
    let parent = eventElement.parentNode
    let chooseElem = parent.querySelector(".choose-elem")
    chooseElem.classList.toggle("hidden")
})

document.addEventListener("click", function(event)) {
    let eventElement = eventtarget
    if (eventElement.classList.value.includes('choose-elem_btn')) {
        let parentContainer = eventElement.parentNode.parentNode
        let elementsContainer = parentContainer.querySelector('.$(parentContainer.classList')
        console.log(eventElement.getAttribute("data-type"))
        let templateElement = document.querySelector('.$eventElement.getAttribute("data-type")')
        const documentFragment = templateElement.content.cloneNode(true)
        elementsContainer.append(documentFragment)
        parentContainer.classList
        console.log(templateElement)
        console.log(elementsContainer)
    }}