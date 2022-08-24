console.log("hello world");


let imgTag = document.querySelector('image')

const compliments = ['If your reading this you are a badass!']

function handleMouseover(){
	const randomIndex = Math.floor(Math.random * compliments.length-1)
	let randomCompliment = compliment
}

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form was submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);