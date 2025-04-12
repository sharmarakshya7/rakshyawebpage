


var randomNumber1 = Math.floor(Math.random()* 6)+1;
var randomimagesrc = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute ("src", randomimagesrc);

var randomNumber2 = Math.floor(Math.random()* 6)+1;
var randomimagesrc = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute ("src", randomimagesrc);

var output = "";
if (randomNumber1 >randomNumber2){
    output= " 🚩 Player 1 wins";
}

else if (randomNumber2>randomNumber1) {
    output= "Player 2 wins 🚩";
}

else {
    output= " 🤝  Its a draw";
}

document.querySelector("h1").textContent = output;

function refreshpage(){
    location.reload();
}


