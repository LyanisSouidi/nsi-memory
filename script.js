// ***************** Menu de configuration *****************

function popup(a) {
    if (a == "openStart") {
        document.getElementById("startBtn").style.display="none";
        document.getElementById("popup").style.display="block";
        document.getElementById("btnClose").style.display="none"
        document.getElementById("restartBtn").innerHTML = "Lancer le jeu";
    } 
    
    if (a == "openIngame") {
        chronoPause();
        document.getElementById("popup").style.display="block";
        document.getElementById("btnClose").style.display="block";
        document.getElementById("restartBtn").innerHTML = "Sauvegarder les modifications et relancer le jeu";
    }

    if (a == "closeIngame") {
        document.getElementById("popup").style.display="none";
        chronoContinue();
    }
    
}

// ***************** Jeu *****************

var imgs   = [ "images/earth.jpg", "images/mars.jpg", "images/titan.jpg",
               "images/venus.jpg", "images/ceres.jpg", "images/jupiter.jpg",
               "images/enceladus.jpg", "images/europa.jpg", "images/grand_tour.jpg",
               "images/superearth.jpg", "images/trappist.jpg", "images/51pegasib.jpg",
               "images/kepler16b.jpg", "images/kepler186f.jpg", "images/55-cancri-e.jpg",
               "images/nightlife.jpg" ];
               
var placeholder = "images/placeholder.png";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function shuffle(array) {
    // Durstenfeld' shuffle algorithm
    for (var i = 0; i < array.length - 2; i+=1) {
        var j = getRandomInt(i, array.length);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Contiendra la liste des images utilisés dans la page.
var imageList;

function generateImageList(numberOfPair, trumpCard) {
    shuffle(imgs);
    imageList = []
    for (var i = 0; i < numberOfPair; i+=1) {
        imageList.push(imgs[i]);
        imageList.push(imgs[i]);
    }
	if (trumpCard == true) {
		imageList.push(imgs[i+1]);
		document.getElementById("21").style.display="initial";
	} else {
        document.getElementById("21").style.display="none";
    }

    shuffle(imageList);
}

function init() {
    document.getElementById("popup").style.display="none";
    document.getElementById("settings").style.display="inline";
    document.getElementById("game").style.display="block";

    if (document.getElementById("formTrump").checked == true) {
        generateImageList(10, true);
    } else {
        generateImageList(10, false);
    }

    var elems = document.getElementsByTagName("img");
    for (var i = 0; i < 21; i++) {
        
        
        elems[i].src = placeholder;
        // On utilise un attribut pour stocker le numéro de l'image à utiliser.
        elems[i].setAttribute("data-elemId", i);
        
        elems[i].onclick = function() {
            var elemId = this.getAttribute("data-elemId");
            this.src = imageList[elemId];
            this.className="revealed";
        }
    }

    chronoStart();
}

// ***************** Chronomètre *****************

var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	document.getElementById("chronotime").innerHTML = min + ":" + sec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	start = new Date()
	chrono()
}
function chronoContinue(){
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoPause(){
	clearTimeout(timerID)
}