'use strict'


// TASK#7
//
// Пользователь вводит два числа, если первое число больше двух и меньше одиннадцать,
// или второе число больше или равно шести и меньше четырнадцати,
// тогда программа выводит “Правильно”, в других случаях выводит 'Не правильно'.
let a=parseInt(prompt('enter at number # 1')),
    b=parseInt(prompt('enter at number # 2'));

if (11 > a && a > 2) {
    alert('It`s right');
} else if (14 > b && b >= 6) {
    alert('It`s right');
} else {
    alert('It`s not right');
}

