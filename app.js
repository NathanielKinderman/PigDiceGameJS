var scores, roundScores, activePlayer;
scores = [0,0];
roundScores = 0;
activePlayer = 0;


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-0' + activePlayer).innerHTML = '<em>' + dice + "</em>";

var x = document.querySelector('#current-0').textContent;
console.log(x);

//document.querySelector('dice').style.display = 'none';


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
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    // add current score to global score
    scores[activePlayer] += roundScores;
    

    //update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //check if player won the game
    if(scores[activePlayer] >= 20 ){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('player-' + activePlayer + '-panel').classList.remove('active');
    }else{
         //next player turn
     nextPlayer();
    }

   
});

function nextPlayer(){
     //next players turn
    activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
    roundScore = 0;

    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');        

    document.querySelector('.dice').style.display = 'none';

};