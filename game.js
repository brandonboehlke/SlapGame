function flick() {
    vegeta.health -= 55.0 * vegeta.addMods();
    vegeta.hits += 1;
    updateScreen()
}

function punch() {
    vegeta.health -= 100.0 * vegeta.addMods();
    vegeta.hits += 1;
    updateScreen()

}

function kick() {
    vegeta.health -= 150.0 * vegeta.addMods();
    vegeta.hits += 1;
    updateScreen()
}


function spinKick() {
    vegeta.health -= 200.0 * vegeta.addMods();
    vegeta.hits += 1;
    updateScreen()
}


function kamehameha() {
    vegeta.health -= 1225.0 * vegeta.addMods();
    vegeta.hits += 1;
    updateScreen()
}

function updateScreen() {
    document.getElementById('playerName').innerText = goku.name
    document.getElementById('playerHealth').innerText = goku.health
    document.getElementById('playerHits').innerHTML = goku.hits
    document.getElementById('enemyName').innerText = vegeta.name
    document.getElementById('enemyHealth').innerText = vegeta.health
    document.getElementById('enemyHits').innerText = vegeta.hits
    var hp = vegeta.health;
    if (hp > 0) { document.getElementById('enemyHealth').innerText = vegeta.health }
    else { document.getElementById('enemyHealth').innerText = "Victory!"; }
}


function reset() {
    vegeta.health = 15000
    vegeta.hits = 0
    vegeta.items = []
    goku.health = 12000
    goku.items = []
    goku.hits = 0
    updateScreen()
}



function Item(name, modifier, description) {
    this.name = name
    this.modifier = modifier
    this.description = description
}
var items = {
    kaioken: new Item('Kaioken', 2.0, 'Doubles fighting abilities'),
    kaioken2: new Item('Kaioken x 2', 4.0, '4 times normal fighting abilities'),
    kaioken3: new Item('Kaioken x 3', 8.0, '8 times normal fighting abilities'),
    kaioken4: new Item('Kaioken x 4', 16.0, '16 times fighting abilities'),
    fullPower: new Item('Full Power', 2.0, 'Doubles fighting abilities'),
    superSaiyan: new Item('Super Saiyan', 10.0, 'Multiplies fighting abilities by 10'),
    superSaiyan2: new Item('Super Saiyan 2', 20.0, 'Multiplies fighting abilities by 20')
}

function giveKaioken(player) {
    goku.items.push(items.kaioken)
}

function giveKaioken2(player) {
    goku.items.push(items.kaioken2)
}

function giveKaioken3(player) {
    goku.items.push(items.kaioken3)
}

function giveKaioken4(player) {
    goku.items.push(items.kaioken4)
}

function giveSaiyan1(player) {
    goku.items.push(items.superSaiyan)
}

function giveSaiyan2(player) {
    goku.items.push(items.superSaiyan2)
}

function giveFullPower(enemy) {
    vegeta.items.push(items.fullPower)
}

function giveEnemySaiyan(enemy) {
    vegeta.items.push(items.superSaiyan)
}

function giveEnemySaiyan2(enemy) {
    vegeta.items.push(items.superSaiyan2)
}

function Enemy(name, health, hits, items) {
    this.name = name;
    this.health = health;
    this.hits = hits;
    this.items = []
    this.attacks = {
        kick: 200,
        punch: 100,
        uppercut: 150,
        gallickGun: 1500
    }
    this.addMods = function () {
        sum = 0
        for (var i = 0; i < this.items.length; i++) {
            if (this.items.length == 0) {sum = 1}
            if(this.items.length >= 3){
                item = this.items[i];
                sum += item.modifier;
            }
        }
        return sum;
    }
}

function Player(name, health, hits, items) {
    this.name = name;
    this.health = health;
    this.hits = hits;
    this.items = []
    this.addMods = function () {
        sum = 0
        for (var i = 0; i < this.items.length; i++) {
            if (this.items.length == 0) { sum = 1 }
            item = this.items[i];
            sum += item.modifier;
        }
        return sum;
    }
}

var goku = new Player("Goku", 12000, 0, 0)
var vegeta = new Enemy("Vegeta", 15000, 0, 0)
var frieza = new Enemy("Frieza", 300000, 0, 0)
var cell = new Enemy("Cell", 500000, 0, 0)
updateScreen()
    // function combatLog() {
    //   //var template = '<ul>'
    //   //for (i=0; i < cbLog.length; i++)
    //   //+=`<li> ${attack}</li>`
    // }

    // var health = 9999;
    // var name = 'Vegeta';
    // var hits = 0;

    // var goku = {
    //     health: 120,
    //     attacks: {
    //         flick: 20,
    //         punch: 15,
    //         spinKick: 30,
    //         kamehameha: 40
    //     },
    //     mobility: 45
    // }

    // var vegeta = {
    //     health: 100,
    //     attacks: {
    //         kick: 15,
    //         punch: 10,
    //         uppercut: 25,
    //         gallickGun: 60
    //     },
    //     mobility: 55
    // }


