"use strict";

function getSolutions(a, b, c) {
    const D = Math.pow(b, 2) - 4 * a * c;
    const obj = {
        D,
        roots: []
}
    if (D > 0) {
        let x1 = (- b + Math.sqrt(D)) / (2 * a);
        let x2 = (- b - Math.sqrt(D)) / (2 * a);
        obj.roots.push(x1, x2);
     } else if (D == 0) {
        let x1 = - b / (2 * a);
        obj.roots.push(x1);
     } 
     
    return obj;
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
        
    console.log (`Вычисляем корни квадратного уравнения ${a} * x**2 + ${b} * x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
     } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
     } else {
        console.log(`Уравнение не имеет вещественных корней`)
     }
     
}
showSolutionsMessage(7,20,-3)



const data = {
  algebra: [1,2,3],
  russian: [5,6],
  english: []
}
function getAverageScore(data) {
  const result = {};
  let sumResult = 0;
  let count = 0;
  const average = {};
  for (let discipline in data) {
      result[discipline] = getAverageMark(data[discipline]);
      sumResult += result[discipline];
      count++;
      result.average = sumResult / count;
  }
   if(!result.length){
     return result.average = 0;
   }
   return result;
}


function getAverageMark(marks){
  let averageMark = 0;
  const sum = array => {
     let sum = 0
     array.forEach(function (value) {
         sum += value;
     });
     return sum
 }
 if (marks.length == 0) {
     return 0;
 } else {
     averageMark = sum(marks) / marks.length
 }
  return averageMark;
}

const result = getAverageScore(data);
console.log(result);


function getPersonData(secretData) {
  let firstName = getDecodedValue(secretData.aaa);
  let lastName = getDecodedValue(secretData.bbb);
  return {firstName, lastName};
}

function getDecodedValue(secret) {
  if (secret == 1) {
    return "Эмильо";
  } else {
    return "Родриго";
  }
} 
console.log (getPersonData({aaa:0, bbb:0}))