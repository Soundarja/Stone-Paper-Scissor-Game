let score = JSON.parse(localStorage.getItem('score'))    
||{
  wins: 0, losses: 0, draws: 0
}
      
updateScore();


function Play(playerMove){
  const Comp = compMove();
  Result = '';
  if(playerMove === 'Scissor'){
    if( Comp === 'Stone'){
      Result = `You LOSE!!`
    }else if ( Comp === 'Paper'){
      Result = `You WIN!!`
    }else if ( Comp === 'Scissor'){
      Result = `It's a TIE!!`
    }
  }

  else if(playerMove === 'Stone'){
    if( Comp === 'Stone'){
      Result = `It's a TIE!!`
    }else if ( Comp === 'Paper'){
      Result = `You LOSE!!`
    }else if ( Comp === 'Scissor'){
      Result = `You WIN!!`
    }
  }

  else if(playerMove === 'Paper'){
    if( Comp === 'Stone'){
      Result = `You WIN!!`
    }else if ( Comp === 'Paper'){
      Result = `It's a TIE!!`
    }else if ( Comp === 'Scissor'){
      Result = `You LOSE!!`
    }
  }

  if(Result === 'You LOSE!!'){
  score.losses++;
  }else if(Result === 'You WIN!!'){
    score.wins++;
  }else if(Result === `It's a TIE!!`){
    score.draws++;
  }
          
  updateScore();

  document.querySelector('.js-result').innerHTML= Result;
  document.querySelector('.js-moves').innerHTML= 
    `You
    <img class="icon" src="Stone paper Scissor images/${playerMove}-emoji.png"> VS
    <img class="icon" src="Stone paper Scissor images/${Comp}-emoji.png">
    Computer`;

  localStorage.setItem('score', JSON.stringify(score));
}

function compMove(){
  const randint = Math.random();
  let Comp = '';

  if(randint >= 0 && randint < 1/3){
    Comp = 'Stone';
  }else if(randint >= 1/3 && randint < 2/3){
    Comp = 'Paper';
  }else if (randint >= 2/3 && randint < 1){
    Comp = 'Scissor';
  }
  return Comp;
}


function updateScore(){
  const attempts = score.wins + score.losses + score.draws;
  document.querySelector('.js-score').innerHTML = 
    ` Game Statistics: <br><br><br>
      Wins = ${score.wins} <br><br>
      Draws = ${score.draws} <br><br>
      Losses = ${score.losses} <br><br>
      Total Attempts = ${attempts};
    `  
}