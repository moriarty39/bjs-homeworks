"use strict"

// ЗАДАНИЕ 1 - Корни квадратного уравнения
let D;

function getSolutions( a, b, c ) { //Вычисление корней квадратного уравнения
    let roots = [];
    
    D = Math.pow(b,2) - 4 * a * c; //Дискриминант

    if (D < 0) {
        console.log(`D : ${D}, roots: ${roots} `);  //нет корней
        return {
            discr : D,
            root : roots
        }

    } else if (D == 0) {
        let x1;
        x1 = -b / (2 * a); //один корень
        roots[0] = x1;
        console.log( `D : ${D}, roots: ${roots} `);
        return {
            discr : D,
            root : roots
        }
    } else if (D > 0) {
        let x1,x2;
        x1 = (-b + Math.sqrt(D)) / (2 * a);  //два корня
        x2 = (-b - Math.sqrt(D)) / (2 * a); 
        roots[0] = x1;
        roots[1] = x2;
        console.log( `D : ${D}, roots: ${roots} `);
        return {   //выходные параметры как объект
            discr : D,
            root : roots
        }
    }
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.discr}`);
    
    if (result.discr < 0) {
        console.log('Уравнение не имеет вещественных корней')
    } else if (result.discr == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.root[0]}`);
    } else if (result.discr > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.root[0]}, X₂ = ${result.root[1]}`)
    }
}
// showSolutionsMessage(1,2,3);
// showSolutionsMessage(7,20,-3);
   showSolutionsMessage(2,4,2);

//ЗАДАНИЕ 2 - Журнал успеваемости

let assessment = {
    algebra : [2,4,5,2,3,4],
    geometry : [2,4,5],
    russian : [3,3,4,5],
    physics : [5,5],
    music : [2,2,6],
    english : [4,4,3],
    poetry : [5,3,4],
    chemistry : [2],
    french : [4,4]
}

let sum;   //переменная для суммы оценок по одному предмету
let sumMidAssesstment = 0;  //переменная по сложения всех средних оценок

function getAverageMark(marks) {   //функция вычисления средней оценки по одному предмету
    for (let i = 0; i < marks.length; i++) {
        sum+=marks[i];
    }
    return sum/marks.length
}


function getAverageScore(data) {

    let midAssessment = {    //объект со средними оценками
        _proto_ : data       //прототип data
    };  

    let general = 0;         //количество предметов
    // midAssessment._proto_ = data;
    for (let key in data) {    //перебираем объект с оценками
        sum = 0;
        general = general + 1;    
        let value = data [key];
        midAssessment[key] = getAverageMark(value); //вызываем функцию  и присваиваем ее результат новому объекту
        sumMidAssesstment += midAssessment[key];    //складываем средние оценки
    }
    midAssessment.average = sumMidAssesstment / general;  //вычисляем average
return (console.log(midAssessment));
}

getAverageScore(assessment);

//ЗАДАНИЕ 3 Расшифровка данных

function getDecodedValue(secret) {    //Разбираем шифр 0 и 1
    let name;
    
    if (secret == 1) {
        name = 'Эмильо';
    } else if (secret == 0) {
        name = "Родриго";
    }
    return name;
   
}

let initCode = {    //Исходные данные
    aaa : 1,
    bbb : 1
}

function getPersonData(secretData) {
   console.log (secretData);
   let finalCode = {
       firstName : "",
       lastName : ""
   }
   finalCode.firstName = getDecodedValue(secretData.aaa);
   finalCode.lastName = getDecodedValue(secretData.bbb);
   return console.log(finalCode); 
}

getPersonData(initCode);