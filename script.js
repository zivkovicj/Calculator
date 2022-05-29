const num0 = document.getElementById('num0');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const clear = document.getElementById('clear');
const enter = document.getElementById('enter');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const printHere = document.getElementById('screen');
const answerExpression = document.getElementById('answer-output');

buttons = [num0,num1,num2,num3,num4,num5,num6,num7,num8,num9];

let tempValue = [];

//display number when button is clicked
for (const [i] of buttons.entries()) {
    buttons[i].addEventListener("click", () => {
        printHere.value = i;;
    })
}
//come back to fix this
// const evaluateArray(tempValue) =>{
//     return (tempValue[0] tempValue[1].value tempValue[2]);
// }
//clear "printHere" function
clear.addEventListener("click", () => {
    printHere.value = " ";
    tempValue.pop();
    tempValue.pop();
    tempValue.pop();
    answerExpression.innerHTML = " ";
    console.log(tempValue);
})

//calulation functions function
add.addEventListener("click", () => {
    tempValue[0] = printHere.value;
    tempValue[1] = "+";
    printHere.value = " ";
    console.log(printHere.value);
    console.log(tempValue);
})
subtract.addEventListener("click", () => {
    tempValue[0] = printHere.value;
    tempValue[1] = "-";
    printHere.value = " ";
})
multiply.addEventListener("click", () => {
    tempValue[0] = printHere.value;
    tempValue[1] = "*";
    printHere.value = " ";
})
divide.addEventListener("click", () => {
    tempValue[0] = printHere.value;
    tempValue[1] = "/";
    printHere.value = " ";
})
enter.addEventListener("click", () => {
    tempValue.push(printHere.value);
    let equalsign = "=";
    let answer;

    switch(tempValue[1]){
        case "+":
            answer = tempValue[0] + tempValue[2]
            break;
        case "-":
            answer = tempValue[0] - tempValue[2]
            break;
        case "*":
            answer = tempValue[0] * tempValue[2]
            break;
        case "/":
            answer = tempValue[0] / tempValue[2]
            break;
    }
    
    answerExpression.innerHTML = `${tempValue[0]} ${tempValue[1]} ${tempValue[2]} ${equalsign} ${answer}`
    console.log(tempValue);
})




