let score = JSON.parse(localStorage.getItem('score'))  || { wins: 0, losses: 0, ties: 0 };

  function playGame(myMove){
  let result = '';
const compMove= pickCompMove();
 
  

if(myMove === 'Scissors') {
 if (compMove === 'Rock'){
  result = 'You Loose';
} if(compMove === 'Paper') {
  result = 'You Win';
} if(compMove === 'Scissors') {
  result = 'It is a Tie'
}

}    if(myMove === 'Paper'){
if (compMove === 'Rock'){
  result = 'You Win';
}else if(compMove === 'Paper') {
  result = 'It is a Tie';
}else if(compMove === 'Scissors') {
  result = 'You Loose'
}
}  if (myMove === 'Rock') {
if (compMove === 'Rock'){
result = 'It is a Tie';
}else if(compMove === 'Paper') {
result = 'You Loose';
}else if(compMove === 'Scissors') {
result = 'You Win'
}

}

if (result === 'You Win') {
      score.wins += 1;
    } else if (result === 'You Loose') {
      score.losses += 1;
    } else if (result === 'It is a Tie') {
      score.ties += 1;
    }

    localStorage.setItem('score' , JSON.stringify(score));


document.querySelector('.resultOP').innerHTML=`${result}`;
document.querySelector('.moves').innerHTML =`You Chose<img src="../RockPaperScissors/assets/${myMove}-emoji.png" alt="">. 
  And Computer Chose    <img src="../RockPaperScissors/assets/${compMove}-emoji.png"alt="">`
}

function pickCompMove() {
      const randomNo=(Math.random());
      let compMove = '';
  if(randomNo < 1/3 && randomNo > 0) {
    compMove ='Rock';
  } if (randomNo < 2/3 && randomNo > 1/3) {
    compMove ='Paper';
  } if (randomNo < 1 && randomNo > 2/3) {
    compMove ='Scissors';
  } 
  return compMove;
}

const resOP = document.querySelector('.scoreOP');
function scoreDisplay(){
              resOP.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses} , Ties: ${score.ties};`
}

function resetScore() {
  resOP.innerHTML = 'Wins: 0, Losses: 0, Ties: 0'
}


let intID;
function autoPlay(){
      intID=setInterval(function(){
      const myMove = pickCompMove();
      playGame(myMove);
      scoreDisplay();
    }, 1000);
  } 
    
function pause(){
  clearInterval(intID);
    
  
}