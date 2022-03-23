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
		let list = document.querySelectorAll('.' + elem); //div 26
		n = 0;
		let t = Math.round(time / (num / step));
		let interval = setInterval(() => {
			n = n + step;
            list.forEach((elem, index, arr) => arr[index].innerHTML = n);

			if (n == num) {
				clearInterval(interval);
			}
		},
			t);

	}
	outNum(26, 'age')
};

const closureElem = document.querySelector(".closure");
let yScroll = false;
window.addEventListener("scroll", function(event){
    if(!yScroll && this.document.documentElement.getBoundingClientRect().top < -1000) {
            this.document.querySelector(".band_holder").style.display = "block";
            yScroll = true; 

}
    closureElem.addEventListener('click', ()=> document.querySelector(".band_holder").style.display = "none")
})
