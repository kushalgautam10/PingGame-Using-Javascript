var scores, roundcsore, activeplayer, gamePlaying ; 

init();

//console.log(dice);

//document.querySelector('#current-' + activeplayer).textContent = dice ;



document.querySelector('.btn-roll').addEventListener('click', function(){
    //if(gamePlaying){
    
   var dice = Math.floor(Math.random() * 6) + 1 ;
    
    var diceDOM =  document.querySelector('.dice') ;
    
   diceDOM.style.display = 'block' ;
    diceDOM.src = 'dice-' + dice + '.png' ;
    
    // update the round score if the rolled number was NOT a 1
    if(dice !== 1){
        //add score
    
    roundcsore += dice ;
    document.querySelector('#current-' + activeplayer).textContent = roundcsore ;
    }
    
    else {
      // next player 
        
       nextPlayer();        
    }
        
    //}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    //if(gamePlaying){
    //add current score to global score
    scores[activeplayer] += roundcsore ;
    
    //update the UI
    
    document.querySelector('#score-' + activeplayer ).textContent = scores[activeplayer] ;
    
    // check if player won the class 
    
    if(scores[activeplayer] >=100){
        document.querySelector('#name-'+ activeplayer).textContent = 'winner' ;
        
        document.querySelector('.dice').style.display ='none';
        
        document.querySelector('player-'+activeplayer + '-panel').classList.add('winner');
        document.querySelector('player-'+activeplayer + '-panel').classList.remove('active');
        
        gamePlaying =false;
        
        
    }
    else{
        nextPlayer();
    }
    //next player
    
        
    //}
    
});

function nextPlayer(){
    
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0 ;
        roundcsore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init)

function init(){
    
scores = [0,0] ;
roundcsore = 0 ;
activeplayer = 0;

    //var gamePlaying = true ;
    
    document.querySelector('.dice').style.display = 'none' ;

    document.getElementById('score-0').textContent='0';

    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent='0';

    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner') ;
    document.querySelector('.player-1-panel').classList.remove('winner') ;
    document.querySelector('.player-0-panel').classList.remove('active') ;
    document.querySelector('.player-1-panel').classList.remove('active') ;
    document.querySelector('.player-0-panel').classList.add('active') ;
}


