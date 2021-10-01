const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
let howManyPassed = 0;
const whoPassed = function(event){
    for (let notes of grades){
        if(notes>70){
            howManyPassed++;
        }
    }
    console.log(howManyPassed + ' people passed!');
}
whoPassed(grades);