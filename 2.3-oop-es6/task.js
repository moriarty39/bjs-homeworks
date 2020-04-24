class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.initialValue = this.durability;    
    }


    takeDamage(damage) {  
        if ((this.durability - damage) > 0) {
            this.durability = this.durability - damage;
        } else this.durability = 0;
        return this.durability;     
    }
    getDamage() {  
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

console.log(arm.durability); 
console.log(arm.getDamage()); 

console.log(bow.durability); 
console.log(bow.isBroken()); 

console.log(arm.durability); 
console.log(arm.isBroken()); 

let option = new Weapon(["Рука", "Лук", "Меч", "Нож", "Посох"], [1, 10, 25, 5, 8], [Infinity, 200, 500, 300, 300], [1, 3, 1, 1, 2]);

class AttackWeapon extends Weapon {
    constructor(newName, name, attack, durability, range) {
        super(name, attack, durability, range);
        this.newName = newName;
    }
}
let forceVar = new AttackWeapon(["Длинный лук", "Секира", "Посох Бури"], ["Лук", "Меч", "Посох"], [15, 27, 10], [200, 800, 300], [4, 1, 3]);

console.log(option);
console.log(forceVar);
