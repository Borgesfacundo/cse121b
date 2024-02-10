/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = parseFloat(document.querySelector("#add1").value);
    let addNumber2 = parseFloat(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);



/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let sub1 = document.querySelector("#subtract1").value;
    let sub2 = document.querySelector("#subtract2").value;
    document.querySelector("#difference").value = subtract(sub1, sub2);

}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (x, y) => x * y;

const multiplyNumbers = () => {
    let factor1 = parseFloat(document.querySelector("#factor1").value);
    let factor2 = parseFloat(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (x, y) => x / y;

const divideNumbers = () => {
    let dividend = parseFloat(document.querySelector("#dividend").value);
    let divisor = parseFloat(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const getTotal = () => {
    let total = 0;
    //input
    let subtotal = parseFloat(document.getElementById("subtotal").value);

    //check the checkbox
    if (document.getElementById("member").checked) {
        subtotal = subtotal * 0.8;
    }

    //display result
    document.getElementById("total").textContent = `${subtotal.toFixed(2)}`;
}
document.querySelector("#getTotal").addEventListener("click", getTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = numbersArray;

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById("odds").textContent = oddNumbers;
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(value => value * 2);
/* Output Sum of Multiplied by 2 Array */
function multiplyAndSum() {
    const multiply = numbersArray.map(x => x * 2);
    return finalResult = multiply.reduce((sum, number) => sum + number);
}
document.querySelector("#sumOfMultiplied").innerHTML = multiplyAndSum();