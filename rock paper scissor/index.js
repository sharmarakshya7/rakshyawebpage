

var randomnumber1 = Math.floor(Math.random()*3)+1;

var randomHand1 = ("./S" +randomnumber1+ ".png");

document.querySelector(".img1").setAttribute("src",randomHand1);


var randomnumber2 = Math.floor(Math.random()*3)+1;
var randomHand2 = ("./S" +randomnumber2+ ".png");
document.querySelector(".img2").setAttribute("src",randomHand2);

if (randomnumber1 === randomnumber2) {
    document.querySelector("h1").innerHTML = "It's a Draw!";
  } else if (
    (randomnumber1 === 1 && randomnumber2 === 3) || // Rock beats Scissors
    (randomnumber1 === 2 && randomnumber2 === 1) || // Paper beats Rock
    (randomnumber1 === 3 && randomnumber2 === 2)    // Scissors beats Paper
  ) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }


function refreshpage(){
    location.reload();
}
  


