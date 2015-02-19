$(document).ready(function(){
	/* Define Life and Poison default values and use them when nothing is stored locally */
	function lifeset(){
		lifes = localStorage.getItem("lifes");
		if (lifes){
			document.getElementById("lifecounter").innerHTML = lifes;
		}
		else {
			localStorage.setItem("lifes", "20");
			document.getElementById("lifecounter").innerHTML = lifes;
		}
	}
	function poisonset(){
		poisons = localStorage.getItem("poisons");
		if (poisons){
			document.getElementById("poisoncounter").innerHTML = poisons;
		}
		else {
			localStorage.setItem("poisons", "0");
			document.getElementById("poisoncounter").innerHTML = poisons;
		}
	}
	/* Turn on immortality (removes death check) */
	immortal = function(){
		$("html, body").animate({scrollTop: 0}, 'fast');		
		$(".immortal").toggle();
	}
	lifeset();
	poisonset();
	/* Turn off immortality at beginning of round by default */
	immortal();
	/* Life Counters */
	addOneLife = function() {
		lifes = parseInt(lifes) + 1;
		document.getElementById("lifecounter").innerHTML = lifes;
		localStorage.setItem("lifes", lifes);
	}
	addFiveLife = function() {
		lifes = parseInt(lifes) + 5;
		document.getElementById("lifecounter").innerHTML = lifes;
		localStorage.setItem("lifes", lifes);
	}
	addTenLife = function() {
		lifes = parseInt(lifes) + 10;
		document.getElementById("lifecounter").innerHTML = lifes;
		localStorage.setItem("lifes", lifes);
	}
	remOneLife = function() {
		lifes = parseInt(lifes) - 1;
		document.getElementById("lifecounter").innerHTML = lifes;
		localStorage.setItem("lifes", lifes);
	}
	remFiveLife = function() {
		lifes = parseInt(lifes) - 5;
		document.getElementById("lifecounter").innerHTML = lifes;
		localStorage.setItem("lifes", lifes);
	}
	remTenLife = function() {
		lifes = parseInt(lifes) - 10;
		document.getElementById("lifecounter").innerHTML = lifes;
		localStorage.setItem("lifes", lifes);
	}
	/* Poison Counters */
	addOnePoison = function() {
		poisons = parseInt(poisons) + 1;
		document.getElementById("poisoncounter").innerHTML = poisons;
		localStorage.setItem("poisons", poisons);
	}
	addFivePoison = function() {
		poisons = parseInt(poisons) + 5;
		document.getElementById("poisoncounter").innerHTML = poisons;
		localStorage.setItem("poisons", poisons);
	}
	remOnePoison = function() {
		poisons = parseInt(poisons) - 1;
		document.getElementById("poisoncounter").innerHTML = poisons;
		localStorage.setItem("poisons", poisons);
	}
	remFivePoison = function() {
		poisons = parseInt(poisons) - 5;
		document.getElementById("poisoncounter").innerHTML = poisons;
		localStorage.setItem("poisons", poisons);
	}
	/* Delete local storage, reset all counters */
	reset = function() {
		localStorage.clear();
		window.location.reload();
		lifeset();
		poisonset();
	}
});