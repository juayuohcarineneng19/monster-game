const attackValue = 10;
let chosenMaxLife = 100

adjustHealthBars(chosenMaxLife);

function attackHandler(params) {
     const damage = dealMonsterDamage(attackValue)
}

attackBtn.addEventListener('click', attackHandler)