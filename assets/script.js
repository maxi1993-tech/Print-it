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

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let currentIndex = 0;
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

arrowLeft.addEventListener("click", function() {
	if (currentIndex === 0) {
		currentIndex = slides.length - 1;
	} else {
		currentIndex = currentIndex - 1;
	}
	document.querySelector(".dot_selected").classList.remove("dot_selected");
	document.querySelectorAll(".dot")[currentIndex].classList.add("dot_selected");
	bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image;
	bannerText.innerHTML = slides[currentIndex].tagLine;
});

arrowRight.addEventListener("click", function() {
	if (currentIndex === slides.length - 1) {
		currentIndex = 0;
	} else {
		currentIndex = currentIndex + 1;
	}
	document.querySelector(".dot_selected").classList.remove("dot_selected");
	document.querySelectorAll(".dot")[currentIndex].classList.add("dot_selected");
	bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image;
	bannerText.innerHTML = slides[currentIndex].tagLine;
});

const dotsContainer = document.querySelector(".dots");
for (let slideIndex = 0; slideIndex < slides.length; slideIndex++) {
	const dotElement = document.createElement("span");
	dotElement.classList.add("dot");
	if (slideIndex === 0) {
		dotElement.classList.add("dot_selected");
	}
	dotsContainer.appendChild(dotElement);
}
