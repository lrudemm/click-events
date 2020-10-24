const button1 = document.querySelector("button");
const body = document.querySelector("body")
button1.addEventListener('click', responseToClick)

function responseToClick() {
   const pTag = document.createElement('p');
   pTag.textContent = "Foo"
   body.appendChild(pTag);


}




