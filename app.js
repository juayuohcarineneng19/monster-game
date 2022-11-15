const attackValue = 10;
const strongAttackValue = 17;
const monsterAttackValue = 14;
const healValue = 20;

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife;
let currentPlayerLife = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset(){
      currentMonsterHealth = chosenMaxLife;
      currentPlayerLife = chosenMaxLife;
      resetGame(chosenMaxLife)
}

function endRound() {
     const initialPlayerHealth = currentPlayerHealth;
     const playerDamage = dealPlayerDamage(monsterAttackValue);
     currentPlayerHealth -= playerDamage;


      if (currentPlayerHealth <= 0 && hasBonusLife ){
          hasBonusLife = false;
          removeBonusLife();
          currentPlayerHealth = initialPlayerHealth;
          setPlayerHealth(initialPlayerHealth)
          alert('You would be dead but the bonus life saved you!')
      }


     if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
          alert ('You won!')  
     } 
     else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
          alert('You lost!');
     }
     else if (currentPlayerHealth <= 0 && currentMonsterHealth  <=0){
          alert ('You have a draw!')
     }
     if (currentMonsterHealth <= 0 || currentPlayerHealth  <= 0)
      {
          reset();
     }
}
function attackMonster(mode) {
     let maxDamage;
     if (mode === 'attack'){
          maxDamage=attackValue;
     } else if (mode === 'strongAttack'){
          maxDamage = strongAttackValue
     }
     const damage =  dealMonsterDamage(maxDamage)
     currentMonsterHealth -= damage;
     endRound();
}
function attackHandler() {
     attackMonster('attack');
}

function strongAttackHandler() {
     attackMonster('strongAttack');
}
function healPlayerHandler(){
     let HEAL_VALUE;
     if (currentPlayerHealth >=chosenMaxLife - healValue) {
     alert ("You cant heal to more than your max innitial health.")
     HEAL_VALUE = chosenMaxLife - currentPlayerHealth;
} else{
     HEAL_VALUE = healValue
}
     increasePlayerHealth(healValue);
     currentPlayerHealth += healValue;
     endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler)