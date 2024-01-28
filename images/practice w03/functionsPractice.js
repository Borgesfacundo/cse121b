let firstName = "Antonia";
let lastName = "Francesca";
//Function
//function fullName(first, last) {
//    return `${firstName} ${lastName}`;
//}
////Anonymus Function
//const fullName = function (first, last) {
//    return `${firstName} ${lastName}`;
//}
//Arrow function
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

//call the function
document.querySelector("#fullName").innerHTML = fullName(firstName, lastName);

//Array practice
let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
//Array Filter()
let namesB = names.filter(name => chartAt(0) === "B");

//Array Map()
let namesL = names.map((name) = name.length);

//Array Reduce()
let namesAvg = names.reduce((total, name) => total + name.length, 0) / names.length;