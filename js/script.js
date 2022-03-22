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

	const boxIventElems = document.querySelector('.box-ivent')
	const ageElems = boxIventElems.querySelectorAll('.age')
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