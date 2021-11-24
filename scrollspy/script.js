console.log("Welcome to the tutorial of scrollspy");

let allItems = document.querySelectorAll(".scrollable_content > ul > li > a");
let prevElement = allItems[0];
let prevEl = document.createElement('p')
let items = document.querySelectorAll('.item')
let scrollHeight = 0
currentElement(allItems[0])
allItems.forEach((element) => {
    element.addEventListener("click", () => {
        prevElement.style.color = "black"
        prevElement.style.backgroundColor = "white"
        currentElement(element)
        prevElement = element
    })
})

function currentElement(hrefElement) {
    let index = hrefElement.attributes.href.value
    index = index[index.length - 1]
    prevEl.style.backgroundColor = "white"
    hrefElement.style.color = "white"
    hrefElement.style.backgroundColor = "blue"
    let element = items[index - 1]
    element.style.backgroundColor = "rgb(222, 221, 255)"
    prevEl = element
}