const monsterHealthBar= document.getElementById('monster-health');
const playerHealthBar= document.getElementById('player-health');
const bonusLifeEl= document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const stronAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');
  function adjustHealthBars(maxLife) {
    monsterHealthBar.max = maxLife;
    monsterHealthBar.value = maxLife;
    playerHealthBar.max = maxLife;
    playerHealthBar.value = maxLife
  } 

  function dealMonsterDamage(damage) {
    const dealtDamage = math.random() * damage;
    monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
    return dealtDamage;

    
  }





