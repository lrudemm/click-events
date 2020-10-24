const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

for(let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function(event) {
		const pTag = document.createElement('p');
		pTag.textContent = event.target.value;
		body.appendChild(pTag);
	})
}

