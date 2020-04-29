//Задача 1

const parseCount = (value) => {
    const parsed = Number.parseInt(value, 10);
    if (isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed
}

const validateCount = (value) => {
    try {
        return parseCount(value)
    } catch (error) {
        return error
    }

}



//Задача 2

class Triangle {
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        const perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    getArea () {
        const p = this.getPerimeter()/2;
        const s = Math.sqrt(p*(p - this.a)*(p-this.b)*(p-this.c));
        return Number(s.toFixed(3));
    }
}



//Задача 2

function getTriangle(firstParty, secondParty, thirdParty) {

    try {
     return new Triangle (firstParty, secondParty, thirdParty);
    } catch {  
  
     return {
       getArea: () => "Ошибка! Неправильный треугольник",
       getPerimeter: () => "Ошибка! Неправильный треугольник"
     };
  
    }   
    
  }
