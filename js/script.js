<<<<<<< HEAD
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
=======
window.onload = function () {
	let popup = document.querySelector(".popup"),
		button = document.querySelector(".btn");
	var card = document.querySelector('.cards .card');
	button.addEventListener("click", openPop);

	function openPop() {
		popup.style.display = "block";
	}

	window.addEventListener("click", closePop);

	function closePop(e) {
		if (e.target == popup) {
			popup.style.display = "none";
		}
	}
	card.addEventListener('click', () => {
		card.classList.toggle('change-bg');
	});
	const time = 3000;
	const step = 2;
	function outNum(num, elem) {
		let l = document.querySelector('.' + elem);
		n = 0;
		let t = Math.round(time / (num / step));
		let interval = setInterval(() => {
			n = n + step;
			if (n == num) {
				clearInterval(interval);
			}
			l.innerHTML = n;
		},
			t);

	}
	outNum(26, 'age')
};
>>>>>>> eae1b622ac4dd0c13fa2e39aebcb983c4ae97202
