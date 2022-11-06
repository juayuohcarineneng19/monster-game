const attackValue = 10;
const strongAttackValue = 17;
const monsterAttackValue = 14;
const healValue = 20;

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife;
let currentPlayerLife = chosenMaxLife;


adjustHealthBars(chosenMaxLife);

function endRound(){
     const playerDamage = dealPlayerDamage(monsterAttackValue);
     currentPlayerHealth =- playerDamage;
     if (currentMonsterHealth <=0 && currentPlayerHealth > 0){
          alert ('You won!');
     } 
     else if (currentPlayerHealth <=0 && currentMonsterHealth > 0){
          alert('You lost!');
     }
     else if (currentPlayerHealth <=0 && currentMonsterHealth  <=0){
          alert ('You have a draw!')
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
     increasePlayerHealth('healValue')
     endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler)