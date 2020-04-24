class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.initialValue = this.durability;    // сохраняем исходное значение прочности    }
    }

    // initialValue = this.durability;


    takeDamage(damage) {  //повреждение от соперника
        if ((this.durability - damage) > 0) {
            this.durability = this.durability - damage;
        } else this.durability = 0;
        return this.durability;     //новое значение прочности
    }
    getDamage() {  //урон от удара данным оружием
        if (this.durability == 0) {
            return 0;
        }
        if (this.initialValue > this.durability * 0.3) {
            return this.attack;
        } else {
            return (this.attack / 2);
        }
    }

    isBroken() {
        if (this.durability == 0) {
            return true;
        } else return false;
    }

}


const sword = new Weapon('Старый меч', 20, 10, 1);
const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);

sword.takeDamage(5);
console.log(sword.durability);

sword.takeDamage(50);
console.log(sword.durability);

arm.takeDamage(20);
console.log(arm.durability);

bow.takeDamage(20);
console.log(bow.durability);

bow.takeDamage(200);
console.log(bow.durability);
console.log(bow.getDamage());

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

let option = new Weapon(["Рука", "Лук", "Меч", "Нож", "Посох"], [1, 10, 25, 5, 8], [Infinity, 200, 500, 300, 300], [1, 3, 1, 1, 2]);

class ForceWeapon extends Weapon {
    constructor(newName, name, attack, durability, range) {
        super(name, attack, durability, range);
        this.newName = newName;
    }
}
let forceoption = new ForceWeapon(["Длинный лук", "Секира", "Посох Бури"], ["Лук", "Меч", "Посох"], [15, 27, 10], [200, 800, 300], [4, 1, 3]);

console.log(option);
console.log(forceoption);



class Hand {
    constructor() {
        this.name = "Рука";
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1
    }
}
class Bow {
    constructor() {
        this.name = "Лук";
        this.attack = 10;
        this.durability = 200;
        this.range = 3
    }
}

class Sword {
    constructor() {
        this.name = "Меч";
        this.attack = 25;
        this.durability = 500;
        this.range = 1
    }
}

class Knife {
    constructor() {
        this.name = "Нож";
        this.attack = 5;
        this.durability = 300;
        this.range = 1
    }
}

class Staff {
    constructor() {
        this.name = "Посох";
        this.attack = 8;
        this.durability = 300;
        this.range = 2
    }
}
const newbow = new Bow();

console.log(newbow.name); // Лук
console.log(newbow.attack); // 10
console.log(newbow.durability); // 200
console.log(newbow.range); // 3