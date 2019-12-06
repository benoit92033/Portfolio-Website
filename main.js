document.addEventListener("DOMContentLoaded", function() {

	let body = document.querySelector("body");
	window.addEventListener("scroll", function() {
	    if (window.scrollY != 0) body.classList.add("scrolled");
	    else body.classList.remove("scrolled");

   		//SKILLBAR
   		let elem = document.querySelector('#levels')
   		if (isInViewport(elem)){
			let skillbars = document.querySelectorAll('.skillbar-bar')
			for (let skillbar of skillbars){
				skillbar.style.width = skillbar.id + "%"
			}
		}
  	})

	//PROJETS

	test = true

	let projets = document.querySelectorAll(".image")
	for (let projet of projets){
		projet.addEventListener("click", function(){
			let id = projet.id
			window.location.href = "./" + id +".html"
		})
	}

	//MENU

	let ouvert = true
	let i = document.querySelector(".fas.fa-bars")
		i.addEventListener("click", function(){
			if(ouvert == true){
				cacheMenu()
				ouvert = false
			}
			else {
				afficheMenu()
				ouvert = true
			}
		})
	
	window.addEventListener("resize", function(){
		let Largeur = window.innerWidth;
		if (Largeur < 1000) {
			cacheMenu()
			ouvert = false
		}
		else {
			afficheMenu()
			ouvert = true
		}	
	});

	setInterval(function() {
		if (ouvert == false)
			cacheMenu()		
	}, 50)
})

function afficheMenu()
{
	let menuEntiers = document.querySelectorAll(".menuEntier")
	for (menuEntier of menuEntiers)
		menuEntier.style.width = "300px"
	document.querySelector("section").style.marginLeft = "325px"
	document.querySelector("footer").style.marginLeft = "320px"

	setTimeout(function() {
		document.querySelector("#textMenu").style.display = "inline"
		let elementsMenuContent = document.querySelector("#menuContent").children
		for (elementMenuContent of elementsMenuContent)
			elementMenuContent.style.display = "inline-block"
	}, 300);
}

function cacheMenu()
{
	let elementsMenuContent = document.querySelector("#menuContent").children
	for (elementMenuContent of elementsMenuContent)
		elementMenuContent.style.display = "none"
	let menuEntiers = document.querySelectorAll(".menuEntier")
	for (menuEntier of menuEntiers)
		menuEntier.style.width = "30px"
	document.querySelector("section").style.marginLeft = "60px"
	document.querySelector("footer").style.marginLeft = "50px"
	document.querySelector("#textMenu").style.display = "none"
}

function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}