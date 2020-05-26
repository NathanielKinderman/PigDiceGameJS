var score, roundScore, activePlayer;
score = [0,0];
roundScore = 0;
activePlayer = 1;


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-0' + activePlayer).innerHTML = '<em>' + dice + "</em>";

var x = document.querySelector('#current-0').textContent;
console.log(x);

document.querySelector('dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click',function(){
      
    //anom function do something
    //random number
    var dice = Math.floor(Math.random()*6) +1;

    //display the results
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice
    //update round only if rolled number is not a one
    if(dice!==1){
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //next players turn
    }

});