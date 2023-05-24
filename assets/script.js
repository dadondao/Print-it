const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
 let prev = document.querySelector('.prev');
 let next = document.querySelector('.next');
 let slidesIndex = 0;
 let dots = document.querySelector('.dots');
 let image = document.querySelector('.banner-img');
 let text = document.querySelector('#banner p');
 const path = './assets/images/slideshow/';

	for( let i = 0 ; i <slides.length ; i++){
		dots.insertAdjacentHTML('afterbegin', '<span class="dot"></span>');
	};
	dots.children[0].className = 'dot dot_selected';

 prev.addEventListener("click", function(){
	if(slidesIndex == 0) {
		slidesIndex = slides.length - 1;
	}else{
		slidesIndex = slidesIndex - 1 ;
	}
	dotSelected(slidesIndex);
	image.src =  path + slides[slidesIndex].image;
	text.innerHTML = slides[slidesIndex].tagLine;

 });

next.addEventListener("click", function(){
	if(slidesIndex == slides.length - 1 ) {
		slidesIndex = 0;
	}else{
		slidesIndex = slidesIndex + 1 ;
	}
	dotSelected(slidesIndex)
	image.src =  path + slides[slidesIndex].image;
	text.innerHTML = slides[slidesIndex].tagLine;


 });

function dotSelected(n){
	for (let j = 0 ; j <dots.childElementCount ; j++){
		if (n == j){
			dots.children[j].className = 'dot dot_selected';
		}else{
			dots.children[j].className = 'dot';
		};
	};
	
};

