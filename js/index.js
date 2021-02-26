//1. Напишіть функцію, що повертає куб числа.

function userCube(a) {
    let x = a * a * a

    return x
}
function task1() {
    let userNumber = +prompt('Введіть число:')
    alert(userCube(userNumber))
}
//2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

function task2() {
    let firstNum = +prompt('Введіть перше число:')
    let secondNum = +prompt('Введіть друге число:')
    let thirdNum = +prompt('Введіть третє число:')
    alert(myFunc(firstNum, secondNum, thirdNum))
}
    function myFunc(a, b, c) {
        let x = (a + b) / c

        return x
    }

//3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

function task3(){
    let userNum = +prompt('Введіть число від 1 до 7')
    console.log(chooseDay(userNum))
}
function chooseDay(a) {
    switch (a) {
        case 1:
            alert('Понеділок');
            break;
        case 2:
            alert('Вівторок');
            break;
        case 3:
            alert('Середа');
            break;
        case 4:
            alert('Четвер');
            break;
        case 5:
            alert('П\'ятниця');
            break;
        case 6:
            alert('Субота');
            break;
        case 7:
            alert('Неділя');
            break;
        default:
            alert('Введіть цифру від 1 до 7!')
    }
    return a
}

//4. Реалізуйте функцію знаходження факторіала

function task4() {
    let userNum = +prompt('Введіть число:')
    console.log(findFactorial(userNum))
}
function findFactorial(n) {

    return (n != 1) ? n * findFactorial(n - 1) : 1
}
//5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

function task5() {
    let userHours = +prompt('Введіть кількість годин:')
    let userMinutes=+prompt('Введіть кількість хвилин:');
    let userSeconds=+prompt('Введіть кількість секунд:');

    console.log(`Це ${userTime(userHours,userMinutes,userSeconds)} секунди.`)
}
function userTime(h, m, s) {
    let x = h * 60 * 60;
    let y = m * 60;
    let z = s ;
    const result = x+y+z

    return result;
}
//6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс».
// якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня".

function task6() {
    let userSeconds = +prompt('Введіть кількість секунд:');
    userSec(userSeconds)
}

function userSec(s) {
    let hours =Math.floor( s/60/60);
    let minutes = Math.floor((s/60) - (hours*60));
    let seconds = Math.floor(s%60);

    console.log(`${hours} : ${minutes} : ${seconds}`)
    return hours, minutes, seconds;
}

//7. 4 відмінності ерров фанкшина від звичайної функції.

function task7() {
  alert('Task is in index.html :)')
}