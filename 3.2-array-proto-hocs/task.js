function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

const compareArrays = (arr1, arr2) => {
    if (arr1.length === arr2.length) {

        return arr1.every((currentValue, index) => currentValue === arr2[index]);
    } else return false;
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize(fn, limit) {
    let memory = [];
    return function (...rest) {

        const elem = memory.find(element => compareArrays(element.args, [...rest]));
        if (elem) {
            return elem.result;
        }
        const Result =  fn(...rest);
        memory.push({ // если параметры новые, добавляем в мемори 
            args: [...rest],
            result: Result
        });
        if (memory.length > limit) { //очищаем 
            memory.splice(0, 1);
        }
        console.log(memory);
        return Result
    }
}
const mSum = memorize(sum, 5);
console.log(mSum(3, 4));
console.log(mSum(3, 4));
console.log(mSum(3, 4));
console.log(mSum(1, 3));
console.log(mSum(3, 4));
console.log(mSum(1, 3));

function testCase(testFunction, valueTime) {
    let arr = [
        [1, 2, 3],
        [1, 2],
        [1, 2, 3],
        [1, 2],
        [9, 5, 2, 4]
    ];
    console.time(valueTime);
    for (let i = 0; i < 10; i++) {
        arr.forEach(testFunction) * i;
    }
    console.timeEnd(valueTime);
    return
}
testCase(sum);
testCase(mSum);
