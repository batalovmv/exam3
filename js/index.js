let damageWitcher = 0
let damageGriffin = 0
let typeAttack = 0
let gameStatus = true
let igni = 0
let swallow = 0

function lutikRandom() {
  return Math.floor(Math.random() * (lutik.length))
}
const lutik = ['Хватит валять дурака, пора уже тушить пожар в этой программе.',

  'Говорят, грифон никогда не наступит на лежащего ведьмака.',

  'Когда скромняга бард, отдыхал от дел, с Геральтом из Ривии, он песню эту пел...',

  'Трус умирает сто раз.Мужественный человек – лишь однажды.',

  'Людям для жизни необходимы три вещи: еда, питье и сплетни.']


const Griffin = {

  hp: 2000,      // Жизненная энергия

  defense: 120,  // Защита

  str: 150,      // Сила

  weapon: 100,    // Оружие
  changeHP: function (amount) {
    this.hp = this.hp + (-amount)
    if (this.hp < 0) {
      this.hp = 0
    }
    return this.hp
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
    this.hp = this.hp + (-amount)
    if (this.hp < 0) {
      this.hp = 0
    }
    return this.hp
  },
  drinkSwallow: function () {
    swallow = Math.floor(Math.random() * (200 - 100 + 1)) + 100
    this.changeHP(-swallow)
  }


};
function getIgniDamage() {
  igni = Math.floor(Math.random() * (200 - 150 + 1)) + 150
  return igni
}

function rand() {
  return Math.floor(Math.random() * (100 + 1))
}




for (let i = 0; i < 15; i++) {
  console.log('Ходит ведьмак');
  for (; ;) {
    typeAttack = prompt('Введите тип атаки : \n 1 - Обычная атака \n 2 - Игни \n 3 - Слушать лютика \n 4 - Убежать \n 5 - Выпить ласточку')
    if (isFinite(typeAttack) && typeAttack % 1 === 0 && typeAttack >= 1 && typeAttack <= 5) {
      console.log('Выбрана атака - ' + typeAttack);
      break
    } else if (typeAttack === null) {
      alert('Вы бежали с поля боя, какой позор')
      typeAttack = 4
      break
    } else {
      alert('Некорректный тип атаки')
    }
  }

  if (parseInt(typeAttack) === 1) {
    if (rand() <= 75) {
      Griffin.changeHP(Witcher.damage())
      if (Griffin.hp > 0) {
        console.log(' Нанесено урона : ' + damageWitcher + '\n Осталось здоровья у грифона :' + Griffin.getStatus() + ' hp');
      } else {
        console.log(' Нанесено урона : ' + damageWitcher + '\n Осталось здоровья у грифона : 0');
        dieStatus = Griffin
        gameStatus = false
      }
    } else {
      console.log(' Ведьмак не попал по грифону');
    }
  } else if (parseInt(typeAttack) === 2) {//игни
    Griffin.changeHP(getIgniDamage())
    if (Griffin.hp > 0) {
      console.log(' Нанесено урона c помощью Игни : ' + igni + '\n Осталось здоровья у грифона :' + Griffin.getStatus() + ' hp');
    } else {
      console.log(' Нанесено урона с помощью Игнип : ' + damageWitcher + '\n Осталось здоровья у грифона : 0');
      dieStatus = Griffin
      gameStatus = false
    }
  } else if (parseInt(typeAttack) === 3) {//лютик
    console.log('Лютик напевает :'+lutik[lutikRandom()]);
  } else if (parseInt(typeAttack) === 4) {//убежать
    alert('Вы бежали с поля боя, какой позор')
    console.log('Ведьмак бежал с поля боя');
    console.log('Осталось здоровья у ведьмака :' + Witcher.getStatus());
    console.log('Осталось здоровья у Грифона :' + Griffin.getStatus());
    break
  } else if (parseInt(typeAttack) === 5) {//выпить ласточку
    Witcher.drinkSwallow()
    console.log('Вылечено ' + swallow + ' hp');
    console.log('Осталось здоровья у ведьмака :' + Witcher.getStatus());
    console.log('Осталось здоровья у Грифона :' + Griffin.getStatus());
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
      continue
    }
    if (Witcher.getStatus() > 0) {
      console.log(' Нанесено урона : ' + damageGriffin + '\n Осталось здоровья у ведьмака :' + Witcher.getStatus() + ' hp');
    } else {
      console.log(' Нанесено урона : ' + damageGriffin + '\n Осталось здоровья у ведьмака : 0');
      dieStatus = Witcher
      gameStatus = false
    }

  }
  if (!gameStatus && dieStatus === Witcher) {
    alert('Ведьмак мертв, игра закончена')
    break
  }
}


