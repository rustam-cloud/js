"use strict";


for (let j = 0; j <= 10; j++) {

    if (j == 5) break;

    document.write('Итерация =  ' + j + '<br>');

}

try{

    document.write('start' + '<br>');
    lol;
    document.write('finish' + '<br>');


}catch (e) {
    document.write(e.name  + '=>' + e.message + '=>' + e.stack);
}

// finally {
//     alert('final');
// }



//
//
// let i = 0
// while (i<=8){
//     document.write(i + '<br>');
//     i++
// }



// for (var i = 0; i <10; i++){
//     document.write('Итерация  цикла 2 = ' + i + '<br>');
// }

// let i = 1;
// do {
//     document.write(i + '<br>');
//     i++;
// } while (i = 0)
