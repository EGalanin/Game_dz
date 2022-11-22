let num = Math.floor(Math.random() * 1000);
console.log("Загаданно", num);
while (true) {
    let guessNum = prompt ("Введте ваше число от 0 до 1000:  q - выход");
    console.log("Пользователь ввел", guessNum);
    if (guessNum === 'q') {
        alert("Очень жаль!");
        break; 
    }
    if (isNaN(guessNum)) {
        alert("Вы ввели не число!");
    }
    else if (guessNum == num) {
        alert("Вы угадали!");
        break;
    }
    else if (guessNum != num && guessNum < num) {
        alert("Вы не угадали! Загаданное число больше!");
    } else {
        alert("Вы не угадали! Загаданное число меньше!");
    }
}