// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Bob', 'Jen'];
// var groupB = ['Marc'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Ced', 32];
var personTwo = ['Yuka', 29];
// Hi Ced, you are 32

function greet (name, age) {
  console.log ('Hi '  + name + ', you are ' + age);
}
greet(...person);
greet(...personTwo);

var names = ['Bob', 'Ben'];
var final = ['Ced', ...names];
// Hi Ced

final.forEach(function (name) {
  console.log('Hi ' + name);
});
