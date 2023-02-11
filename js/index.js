let damageWitcher
const Griffin = {

  hp: 2000,      // Жизненная энергия

  defense: 120,  // Защита

  str: 150,      // Сила

  weapon: 0,    // Оружие
  changeHP: function (amount) {
    return this.hp = this.hp + (-amount)
  },
  getStatus: function () {
    return this.hp
  }

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

for (let i = 0; i < 2; i++) {
  if (rand() <= 75) {
    Griffin.changeHP(Witcher.damage())
    if (Griffin.hp >= 0) {
      console.log('Нанесено урона : ' + damageWitcher + ' Осталось здоровья у грифона :' + Griffin.getStatus() + 'hp');
    } else {
      console.log('Нанесено урона : ' + damageWitcher + ' Осталось здоровья у грифона : 0');
    }
  } else {
    console.log('Ведьмак не попал по грифону');
  }
}


