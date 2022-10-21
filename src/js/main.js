const gameStart=document.querySelector('.game-start');
const gameScore=document.querySelector('.game-score');
const gameArea=document.querySelector('.game-area');
const gameOver=document.querySelector('game-over');

gameStart.addEventListener('click',onGameStart);

document.addEventListener('keydown',onKeyDown);
document.addEventListener('keyup',onKeyUp);

let keys={};
let player={
    x:150,
    y:100,
    width:0,
    height:0,
    lastTimeFiredFireBall:0,
};
let game={
    speed:2,
    movingMultiplier:4,
    fireBallMultiplier:5,
    fireInterval:1000,
};
let scene={
    score:0,
}

const gamePoints=gameScore.querySelector('.points');

function onGameStart(){
   gameStart.classList.add('hide');

   const wizard=document.createElement('div');
   wizard.classList.add('wizard');
   wizard.style.top=player.y+'px';
   wizard.style.left=player.x+'px';
   gameArea.appendChild(wizard);
   player.width=wizard.offsetWidth;
   player.height=wizard.offsetHeight;

   window.requestAnimationFrame(gameAction);
}

function onKeyDown(event){
    keys[event.code]=true;
}

function onKeyUp(event){
    keys[event.code]=false;
}

function gameAction(timestamp){
    const wizard=document.querySelector('.wizard');

    scene.score++;
    let isInAir=(player.y+player.height)<=gameArea.offsetHeight;
    if(isInAir){
        player.y+=game.speed;
    }

    if(keys.ArrowUp&&player.y>0){
        player.y-=game.speed*game.movingMultiplier;
    }
    if(keys.ArrowDown&&isInAir){
        player.y+=game.speed*game.movingMultiplier;
    }
    if(keys.ArrowLeft&&player.x>0){
        player.x-=game.speed*game.movingMultiplier;
    }
    if(keys.ArrowRight&&player.x+player.width<gameArea.offsetWidth){
        player.x+=game.speed*game.movingMultiplier;
    }
    if(keys.Space&&timestamp-player.lastTimeFiredFireBall>game.fireInterval){
        wizard.classList.add('wizard-fire');
        addFireball(player);
        player.lastTimeFiredFireBall=timestamp;
    }else{
        wizard.classList.remove('wizard-fire');
    }
    wizard.style.top=player.y+'px';
    wizard.style.left=player.x+'px';

    let fireBalls=document.querySelectorAll('.fire-ball');
    fireBalls.forEach(fireBall=>{
        fireBall.x+=game.speed*game.fireBallMultiplier;
        fireBall.style.left=fireBall.x+'px';
        if(fireBall.x+fireBall.offsetWidth>gameArea.offsetWidth){
            fireBall.parentElement.removeChild(fireBall);
        }
    })

    gamePoints.textContent=scene.score;
    window.requestAnimationFrame(gameAction);
}

function addFireball(player){
    let fireBall=document.createElement('div');
    fireBall.classList.add('fire-ball');
    fireBall.style.top=(player.y+player.height/3-5)+'px';
    fireBall.x=player.x+player.width;
    fireBall.style.left=fireBall.x+'px';
    gameArea.appendChild(fireBall);
}
