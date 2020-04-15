function getAnimalSound(animal) {
    let animalSound;

    if (animal == undefined) {
        animalSound = null   } 
        else {
        animalSound = animal.sound;
    }
   
    return animalSound
}

function getAverageMark(marks) {
    let average = 0;
    let value = 0;
    let roundedAverage;
    for (let i=0; i< marks.length; i++) {   
        value = Number(marks[i]) + value;    
    }
    average = value / marks.length;
    roundedAverage = Math.round(average);
    return roundedAverage
}


function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}