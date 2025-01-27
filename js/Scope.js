var num1 = 3;
var num2 = 4;

function add() {
    num1 = 5;
    num2 = 3;
    console.log(num1 + num2);
}

add();

console.log("next q");

// console.log("let");
// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i) 
//     }, i*100);
// }

// console.log("var");
// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i) 
//     }, i*100);
// }

// {
//     const a = 5;
//     var b = 6;
//     let c = 7;
// }

// console.log(a + ", " + b + ", " + c)

console.log("here");
console.log(count2); // will throw error
var count2 = 2;

console.log("spread");
const fn = (a, x, y, ...numbers) => {
	console.log(x, y, numbers); // prints (2, 3, [4,5,6,7])
}

fn(1, 2, 3, 4, 5, 6, 7);