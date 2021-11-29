console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img')

const imgCompliment = () => {
	alert("you are still cool btw")
}
img.addEventListener('mouseover', imgCompliment)