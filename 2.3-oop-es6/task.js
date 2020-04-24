class Weapon {
	constructor(weaponNames) {
		this.name = weaponNames.name;
		this.attack = weaponNames.attack;
        this.durability = weaponNames.durability;
        this.range = weaponNames.range;
        this.startDurability = this.durability;
    }
    
    takeDamage(damage) {
       const newDurability = this.durability - damage;
        if (newDurability <= 0) {
            this.durability = 0;
        } else {
            this.durability = newDurability;
        }
        return this.durability
    }
    getDamage() {
        if (this.durability >= 0.3 * this.startDurability){
            return this.attack;
        } else if (this.durability === 0) {
            return 0;
        } else {
            return this.attack / 2;
        }
    }
    isBroken() {
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}

const arm = new Weapon({
    name: 'Рука',
    attack: 1, 
    durability: Infinity, 
    range: 1
});
const bow = new Weapon({
    name: 'Лук',
    attack: 10, 
    durability: 200, 
    range: 3
});
const sword = new Weapon({
    name: 'Меч', 
    attack: 25, 
    durability: 500, 
    range: 1
});
const knife = new Weapon({
    name:'Нож', 
    attack: 5, 
    durability: 300, 
    range: 1
});
const staff = new Weapon({
    name: 'Посох', 
    attack: 8, 
    durability: 300, 
    range: 2
});
const longBow = new Weapon({
    name: 'Длинный лук', 
    attack: 15, 
    durability: bow.durability, 
    range: 4
});
const ax = new Weapon({
    name: 'Секира', 
    attack: 27, 
    durability: 800, 
    range: sword.range
});
const stormStaff = new Weapon({
    name: 'Посох Бури', 
    attack: 10, 
    durability: staff.durability, 
    range: 3
});


// arm.takeDamage(20);
// console.log(arm.durability); // Infinity

// bow.takeDamage(20);
// console.log(bow.durability); // 180

// bow.takeDamage(200);
// console.log(bow.durability); // 0


// console.log(bow.durability); // 0
// console.log(bow.getDamage()); // 0

// console.log(arm.durability); // Infinity
// console.log(arm.getDamage()); // 1


// console.log(bow.durability); // 0
// console.log(bow.isBroken()); // true

// console.log(arm.durability); // Infinity
// console.log(arm.isBroken()); // false

// Задача 2

class Arm extends Weapon{
    constructor() {
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1})
    }
}

const arm2 = new Arm();

class Bow extends Weapon{
    constructor() {
        super({ name: 'Лук', attack: 10, durability: 200, range: 3})
    }
}

const bow2 = new Bow();

class Sword extends Weapon{
    constructor() {
        super({ name: 'Меч', attack: 25, durability: 500, range: 1})
    }
}

const sword2 = new Sword();

class Knife extends Weapon{
    constructor() {
        super({name:'Нож', attack: 5, durability: 300, range: 1})
    }
}

const knife2 = new Knife();

class Staff extends Weapon{
    constructor() {
        super({ name: 'Посох', attack: 8, durability: 300, range: 2})
    }
}

const staff2 = new Staff();

class LongBow extends Bow{
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15; 
        this.range = 4;
    }
}

const longBow2 = new LongBow();

class Axe extends Sword{
    constructor() {
        super();
        this.name = 'Секира'; 
        this.attack = 27; 
        this.durability = 800; 
    }
}

const ax2 = new Axe();

class StormStaff extends Staff{
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

const stormStaff2 = new StormStaff();


console.log(stormStaff2.name); // Посох Бури
console.log(stormStaff2.attack); // 10
console.log(stormStaff2.durability); // 300
console.log(stormStaff2.range); // 3

// Задача 3

class StudentLog {

    constructor( name = String, ){
        this.name = name
        this.subjectArr = []
    }


    getName(){
        return this.name
    }

    addGrade( grade = Number, subject = String ){
        const newSubj = {}
        if(Number.isInteger(grade) && typeof subject === 'string' && grade< 5){
                newSubj.grade = grade
                newSubj.subject = subject
            this.subjectArr.push(newSubj)
        } else{
            return `Вы пытались поставить оценку ${grade} по предмету "${subject}". Допускаются только числа от 1 до 5.`
        }
        return newSubj
    }

}
