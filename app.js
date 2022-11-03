const attackValue = 10;

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife;
let currentPlayerLife = chosenMaxLife;


adjustHealthBars(chosenMaxLife);

function attackHandler() {
     const damage =  dealMonsterDamage(attackValue)
     currentMonsterHealth -= damage
}

attackBtn.addEventListener('click', attackHandler)