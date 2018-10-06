let userguess;
let yourguesses = '';
let compguess = makeid();
let guessesleft = 9;
let wins = 0;
let loses = 0;

console.log(compguess);
document.getElementById("winscount").innerHTML = wins;
document.getElementById("lossescount").innerHTML = loses;
document.getElementById("guessesleft").innerHTML = guessesleft;
document.getElementById("yourguesses").innerHTML = yourguesses;

let actionbutton = document.getElementById('actionbutton');
actionbutton.onclick = function(){readfrominput()};

function makeid() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };
  
function readfrominput(){
    userguess = document.getElementById("mynextguess").value;
    if((userguess.length == 1)){
      yourguesses = yourguesses + userguess + ' ';
      document.getElementById("yourguesses").innerHTML = yourguesses;
      document.getElementById("mynextguess").value = '';
      checkanswer(); 
    } else{
      alert('Type one letter to "My next guess" input');
      document.getElementById("mynextguess").value = '';
      userguess =  false;
    }
    return userguess;
}

function checkanswer(){
  if (userguess != compguess){
      guessesleft--;
      document.getElementById("guessesleft").innerHTML = guessesleft;
      if(guessesleft == 0){
        alert('You are looser Brooooooo(((');
        loses++;
        document.getElementById("lossescount").innerHTML = loses;
        guessesleft = 9;
        document.getElementById("guessesleft").innerHTML = guessesleft;
        yourguesses = '';
        document.getElementById("yourguesses").innerHTML = yourguesses;
        compguess = makeid();
        console.log(compguess);
      }
  } else{
    alert('You win Brooooooo!!!');
    wins++;
    document.getElementById("winscount").innerHTML = wins;
    guessesleft = 9;
    document.getElementById("guessesleft").innerHTML = guessesleft;
    yourguesses = '';
    document.getElementById("yourguesses").innerHTML = yourguesses;
    compguess = makeid();
    console.log(compguess);
  }
};





