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