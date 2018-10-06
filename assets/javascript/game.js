let userguess;
let yourguesses = '';
let compguess = makeid();
let guessesleft = 9;
let wins = 0;
let loses = 0;

document.getElementById("mynextguess").focus();

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
    document.getElementById("mynextguess").focus();
    if((userguess.length == 1)){
      yourguesses = yourguesses + userguess + ' ';
      document.getElementById("yourguesses").innerHTML = yourguesses;
      document.getElementById("mynextguess").value = '';

      document.getElementById('mynextguess').style.backgroundColor = '#006CCE';
      document.getElementById('mynextguess').style.border = '2px solid #006CCE';
      document.getElementById('guessheader').style.color = 'black';
      document.getElementById('mistake').style.display = 'none';

      checkanswer(); 
    } else{

      document.getElementById('mynextguess').style.backgroundColor = '#FF5F00';
      document.getElementById('mynextguess').style.border = '2px solid #FF5F00';
      document.getElementById('guessheader').style.color = '#FF5F00';
      document.getElementById('mistake').style.display = 'block';

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





