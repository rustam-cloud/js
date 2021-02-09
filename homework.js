'use strict'
/*
Задача 2.
Реализовать скрипт, при помощи цикла while вывести  числа  в документ в промежутке 15  до 52.*/
/*
let i = 15;
while (i <= 52) {
    document.write('Что-то ' + i + '<br>');
    i++;
}*/

// Задача № 3
// Реализовать скрипт, при помощи цикла while вывести  числа
// в документ в промежутке 27  до 768, которые будут кратные 8.
//
// let i = 27;
// // let b;
// while (i <= 768){
//     let b = i % 8;
//         if (b == 0){
//             document.write('Что-то ' + i + '<br>');
//         }
//     i++;
// }

//                  Задача №4
//
// Реализовать задачу 2 и 3 с использованием цикла for.


// for (let i=15; i<=52; i++) {
//     document.write('Что-то ' + i + '<br>');
// }

// for (let i=27; i<=768; i++) {
//     let b=i%8;
//     if (b == 0) {
//         document.write('Что-то ' + i + '<br>');
//     }
// }


//                  Задача № 5
/*
Реализовать два цикла for один будет вложенный во второй, условия обоих циклов:
    начало счетчика 1, окончание 10, шаг 2, необходимо каждую итерацию обоих циклов вывести в документ.*/
/*
for (let i=1; i<=10; i+=2) {
    document.write('Что-то ' + i + '<br>');
    for (let i=1; i<=10; i+=2) {
        document.write('Что-то ' + i + '<br>')
    }
}*/


//                  Задача № 6
/*
Вывести в документ используя цикл while
    одинаковые изображения в кол-ве 5 шт.,  выводить через тег img.
*/

/*
 let i = 1;
 while (i <= 5) {
     document.write('<p>' + '<img src="1.png"' + '<p>');
     i++;
 }
*/


//                  Задача № 7

// Вывести в документ используя цикл  for
// все цифры от 1 до 70 ,  которые не будут кратные 3.
/*

for (let i = 1; i <= 70; i++) {
    let b = i % 3;
    if (b != 0){
        document.write('Что-то ' + i + '<br>');
    }
        }*/

/*
Задача 8.
Пользователь вводит число пять раз, программа рассчитывает и выводит среднее арифметическое введенных чисел.
*/
//
// let a=parseInt(prompt("enter a number")),
//     b=parseInt(prompt("enter a number")),
//     c=parseInt(prompt("enter a number")),
//     d=parseInt(prompt("enter a number")),
//     e=parseInt(prompt("enter a number"));
// document.write(eval((a+b+c+d+e) / 5));

// let count = 0;
// let maxCount = 200
//
// for (var i = 0; i < maxCount; i++) {
//     count += parseInt(prompt('Введи число'));
// }
// let res = count / maxCount;
//
// alert('Среднее арифметическое = ' + res);

/*
Задача 1.
Пользователь вводит два числа первое  от 1 до 10, второе от 15 до 30,
    необходимо вывести в документ при помощи цикла for,  интервал
между введенными числами через перенос строки с итерацией +1.
*/

/*
let a=parseInt(prompt("enter a number from one to ten")),
     b=parseInt(prompt("enter a number from fifteen to thirty"));
for (a++; a<b;a++) {
    document.write('Что-то ' + a + '<br>');
}


*/
