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
const printHere = document.getElementById('screen');

buttons = [num0,num1,num2,num3,num4,num5,num6,num7,num8,num9];

for (const [i, value] of buttons.entries()) {
    buttons[i].addEventListener("click", () => {
        printHere.append(i);
    })
}


