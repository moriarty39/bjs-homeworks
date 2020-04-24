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
const axe = new Weapon({
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

const axe2 = new Axe();

class StormStaff extends Staff{
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

const stormStaff2 = new StormStaff();


console.log(stormStaff2.name); 
console.log(stormStaff2.attack); 
console.log(stormStaff2.durability); 
console.log(stormStaff2.range); 



let algebra = [];
let geometry = [];
let math = [];

class StudentLog {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {  
        if (grade >= 1 && grade <= 5) {
            switch (subject) {
                case 'algebra':
                    algebra.push(grade);
                    break
                case 'geometry':
                    geometry.push(grade);
                    break
                case 'math':
                    math.push(grade);            
                    break
            }
            return 1 + `\nЖурнал:` + `\nАлгебра ${algebra}` + `\nГеометрия ${geometry}` + `\nМатематика ${math}`
        } else if (grade > 5) {
            return (`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.\n` + 1);
        } else return (`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.\n` + 0);
    }
    getTotalAverage() {   
        let sum = 0;
        let mas = algebra.concat(geometry,math);
        if (mas.length == 0) {
            return 0
        }
        for (let i = 0; i < mas.length; i++) {
            sum = sum + mas[i];
        }
        return `Средняя оценка:  ${Math.round(sum / mas.length)}`;
    }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров
console.log(log.addGrade(3, 'algebra'));
// 1
console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0
console.log(log.addGrade(4, 'algebra'));
// 1
console.log(log.addGrade(5, 'geometry'));
// 1
console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
console.log(log.addGrade(4, 'geometry'));

console.log(log.getTotalAverage()); 