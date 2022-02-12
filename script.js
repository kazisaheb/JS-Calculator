let resultField = document.getElementById('result');
let inputField = document.getElementById('input');
//Numbers calling
let numbers = document.getElementsByClassName('num');
for (btn of numbers) {
  btn.addEventListener('click', function (event) {
    let btnValue = event.target.innerText;
    inputField.append(btnValue);
  })
}
// AC button function
let ac = document.getElementById('ac');
ac.addEventListener('click', function () {
  inputField.innerText = '';
  resultField.innerText = 0;
})
// CE button function
let ce = document.getElementById('ce');
ce.addEventListener('click', function () {
  inputField.removeChild(inputField.lastChild);
})
// = button function
let equel = document.getElementById('equel');
equel.addEventListener('click', function () {
  resultField.innerText = '= ' + eval(inputField.innerText);
})