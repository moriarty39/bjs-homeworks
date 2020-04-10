function calculateTotalMortgage(percent, contribution, amount, date) {
    let date1 = new Date;
    date2 = date;
    year1 = date1.getFullYear();
    year2 = date2.getFullYear();
    month1 = date1.getMonth();
    month2 = date2.getMonth();
    creditBody = amount - contribution;
    fractionPercent = percent / 100 / 12;
if(month1===0){ 
    month1++;
    month2++;
}
let perMonths; 
perMonths = (year2 - year1) * 12 + (month2 - month1);

let monthDue = creditBody * (fractionPercent + fractionPercent / (Math.pow((1 + fractionPercent), perMonths) - 1))
let totalAmount = monthDue * perMonths;
totalAmount = parseFloat(totalAmount.toFixed(2));
console.log(perMonths);
console.log(creditBody);
console.log(monthDue);
return totalAmount;
}

function getGreeting(name) {
    if (name == '' || name == 'null' || name =='undefined') {
		name = 'Аноним'
	}
	
	return greeting = `Привет, мир! Меня зовут ${name}`;
}