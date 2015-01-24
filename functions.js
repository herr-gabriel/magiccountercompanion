$(document).ready(function(){
	var lifes = localStorage.getItem("lifes");
	if (lifes){
		document.getElementById("lifecounter").innerHTML = lifes;
	}
	else {
		localStorage.setItem("lifes", "20");
		document.getElementById("lifecounter").innerHTML = lifes;
	}

	poisons = localStorage.getItem("poisons");
	if (poisons){
		document.getElementById("poisoncounter").innerHTML = poisons;
	}
	else {
		localStorage.setItem("poisons", "0");
		document.getElementById("poisoncounter").innerHTML = poisons;
	}

	addOneLife = function() {
		lifes = parseInt(lifes) + 1;
		document.getElementById("lifecounter").innerHTML = lifes;
	}
	addFiveLife = function() {
		lifes = parseInt(lifes) + 5;
		document.getElementById("lifecounter").innerHTML = lifes;
	}
	addTenLife = function() {
		lifes = parseInt(lifes) + 10;
		document.getElementById("lifecounter").innerHTML = lifes;
	}

	remOneLife = function() {
		lifes = parseInt(lifes) - 1;
		document.getElementById("lifecounter").innerHTML = lifes;
	}
	remFiveLife = function() {
		lifes = parseInt(lifes) - 5;
		document.getElementById("lifecounter").innerHTML = lifes;
	}
	remTenLife = function() {
		lifes = parseInt(lifes) - 10;
		document.getElementById("lifecounter").innerHTML = lifes;
	}


	addOnePoison = function() {
		poisons = parseInt(poisons) + 1;
		document.getElementById("poisoncounter").innerHTML = poisons;
	}
	addFivePoison = function() {
		poisons = parseInt(poisons) + 5;
		document.getElementById("poisoncounter").innerHTML = poisons;
	}

	remOnePoison = function() {
		poisons = parseInt(poisons) - 1;
		document.getElementById("poisoncounter").innerHTML = poisons;
	}
	remFivePoison = function() {
		poisons = parseInt(poisons) - 5;
		document.getElementById("poisoncounter").innerHTML = poisons;
	}

	reset = function() {
		localStorage.clear();
		window.location.reload();
	}
});