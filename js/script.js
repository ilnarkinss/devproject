window.onload = function () {
	let popup = document.querySelector(".popup"),
		button = document.querySelector(".btn");
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

	const boxIventElems = document.querySelector('.box-ivent');
	const ageElems = boxIventElems.querySelectorAll('.age');
	ageElems.forEach(elem => {
		let num = 26;
		let time = 2000;
		let step = 1;
		let n = 0;
		let t = Math.round(time / (num / step));
		let interval = setInterval(() => {
			n = n + step;
			if (n == num) {
				clearInterval(interval);
			}
			elem.innerText = n;
		},t);
	});	
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