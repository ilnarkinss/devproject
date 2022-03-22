const popupContainer = document.querySelector(".popup_container");

const popupElem = document.createElement("div");
const contentElem = document.createElement("div");
const pElem = document.createElement("p");
const closureElem = document.createElement("div");

popupElem.classList.add("popup");
contentElem.classList.add("popup_content");
closureElem.classList.add("closure");

pElem.innerText = "Кнопка для запроса ниже. Жми!";
closureElem.innerText = "❌";

contentElem.append(pElem, closureElem);
popupElem.append(contentElem);
popupContainer.append(popupElem);

window.addEventListener("scroll", function(event){
    event.preventDefault();
    if (document.documentElement.getBoundingClientRect().top < -100) {
        popupElem.style.display = "block";
    } 
        closureElem.addEventListener('click', ()=> popupElem.remove());

})
