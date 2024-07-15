// there are 2 players
// each player has health, attack, defense
// each player can attack the other player
// when they attack, they remove the attack value from the opponents health
// and they themselves lose health equal to the oponents defense value

/* 

JINX
HEALTH 6
ATT 3
DEF 2

BRUAM
HEALTH 9
ATT 2
DEF 4

JINX attacks BRUAM
BRUAM loses 3 HP
JINX loses 4 HP
*/

class Player {
    constructor(name, health, att, def) {
        this.name = name;
        this.health = health;
        this.att = att;
        this.def = def
    }
    attack(defender) {
        console.log(`${this.name} attacks ${defender.name}`)
        // remove some health from the defender
        defender.health = defender.health - this.att
        // remove health from attacker based on the defenders defence value.
        this.health = this.health - defender.def
        console.log(`${defender.name} has ${defender.health} health left`)
    }
}

const Jinx = new Player('Jinx', 6, 3, 2)
const Bruam = new Player('Bruam', 9, 2, 4)

console.log(Jinx)
console.log(Bruam)

Jinx.attack(Bruam)
Bruam.attack(Jinx)