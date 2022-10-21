const gameStart=document.querySelector('.game-start');
const gameScore=document.querySelector('.game-score');
const gameArea=document.querySelector('.game-area');
const gameOver=document.querySelector('game-over');

gameStart.addEventListener('click',onGameStart);

function onGameStart(){
   gameStart.classList.add('hide');

   const wizard=document.createElement('div');
   wizard.classList.add('wizard');
   wizard.style.top='200px';
   wizard.style.left='200px';
   gameArea.appendChild(wizard);
}