let damageWitcher = 0
let damageGriffin = 0
let gameStatus = true
const Griffin = {

  hp: 2000,      // Жизненная энергия

  defense: 120,  // Защита

  str: 150,      // Сила

  weapon: 1000,    // Оружие
  changeHP: function (amount) {
    return this.hp = this.hp + (-amount)
  },
  getStatus: function () {
    return this.hp
  },
  damage: function () {
    return damageGriffin = this.str + this.weapon - this.defense
  },

};

const Witcher = {

  hp: 1000,

  defense: 100,

  str: 120,

  weapon: 250,

  damage: function () {
    return damageWitcher = this.str + this.weapon - this.defense
  },
  getStatus: function () {
    return this.hp
  },
  changeHP: function (amount) {
    return this.hp = this.hp + (-amount)
  }


};

function rand() {
  return Math.floor(Math.random() * (100 + 1))
}

for (let i = 0; i < 15; i++) {
  console.log('Ходит ведьмак');
  if (rand() <= 75) {
    Griffin.changeHP(Witcher.damage())
    if (Griffin.hp >= 0) {
      console.log(' Нанесено урона : ' + damageWitcher + '\n Осталось здоровья у грифона :' + Griffin.getStatus() + ' hp');
    } else {
      console.log(' Нанесено урона : ' + damageWitcher + '\n Осталось здоровья у грифона : 0');
      dieStatus = Griffin
      gameStatus = false
    }
  } else {
    console.log(' Ведьмак не попал по грифону');
  }
  if (!gameStatus && dieStatus === Griffin) {
    alert('Грифон мертв, игра закончена')
    break
  } else {///ходит грифон
    console.log('Ходит грифон');
    if (rand() <= 50) {
      Witcher.changeHP(Griffin.damage())
    } else {
      console.log(' Грифон ничего не сделал');
    }
    if (Witcher.getStatus() >= 0) {
      console.log(' Нанесено урона : ' + damageGriffin + '\n Осталось здоровья у ведьмака :' + Witcher.getStatus() + ' hp');
    } else {
      console.log(' Нанесено урона : ' + damageGriffin + '\n Осталось здоровья у ведьмака : 0');
      dieStatus = Witcher
      gameStatus = false
    }

  }
  if (!gameStatus && dieStatus === Witcher){
    alert('Ведьмак мертв, игра закончена')
    break
  }
}


