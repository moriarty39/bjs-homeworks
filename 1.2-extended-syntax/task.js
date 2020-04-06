function getResult(a,b,c){
    "use strict";
    const x = [];
    let figure = Math.pow(b, 2) - 4 * a * c;
    if (figure > 0) {
        let squareRoot_1 = (- b + Math.sqrt(figure)) / (2 * a);
        let squareRoot_2 = (- b - Math.sqrt(figure)) / (2 * a);
        x.push(squareRoot_1, squareRoot_2);
     } else if (figure == 0) {
        let squareRoot_3 = - b / (2 * a);
        x.push(squareRoot_3);
     } else {
        return x;
     }

    return x;  

}

function getAverageMark(marks = []){
    let averageMark = 0;
    sum = array => {
       let sum = 0
       array.forEach(function (value) {
           sum += value;
       });
       return sum
   }
   if (marks.length == 0) {
       return 0;
   } else if (marks.length <= 5) {
       averageMark = sum(marks) / marks.length
   } else {
       console.log("Total: " + marks.length);
       let sliceArray = marks.slice(0, 5);
       averageMark = sum(sliceArray) / sliceArray.length;
   }
   
    return averageMark;
 }
    

function askDrink(name,dateOfBirthday){
    let today = new Date();
        year = today.getFullYear();
        yearOfBirth = dateOfBirthday.getFullYear();
        yearsOld = year - yearOfBirth;
        result = '';
    if (yearsOld > 18) {
        result = (`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        result = (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }
    return result;
}