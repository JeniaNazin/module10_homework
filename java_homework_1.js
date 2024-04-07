const result = prompt ('введите число');
let x = result;
let x = +x;
typeof x;

if (x %2 === 0) {
    console.log('Число четное');
} else {
    alert('Число нечетное');}

if (typeof x != 'number') {
console.log ('Упс, кажется, вы ошиблись');
}
