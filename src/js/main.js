const gameStart=document.querySelector('.game-start');
const gameScore=document.querySelector('.game-score');
const gameArea=document.querySelector('.game-area');
const gameOver=document.querySelector('game-over');

gameStart.addEventListener('click',onGameStart);

document.addEventListener('keydown',onKeyDown);
document.addEventListener('keyup',onKeyUp);

let keys={};

function onGameStart(){
   gameStart.classList.add('hide');

   const wizard=document.createElement('div');
   wizard.classList.add('wizard');
   wizard.style.top='200px';
   wizard.style.left='200px';
   gameArea.appendChild(wizard);

   window.requestAnimationFrame(gameAction);
}

function onKeyDown(event){
    keys[event.code]=true;
}

function onKeyUp(event){
    keys[event.code]=false;
}

function gameAction(){
    if(keys.ArrowUp){

    }
    if(keys.ArrowDown){

    }
    if(keys.ArrowLeft){

    }
    if(keys.ArrowRight){
        
    }
    window.requestAnimationFrame(gameAction);
}
