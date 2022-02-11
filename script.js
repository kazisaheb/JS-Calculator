let resultField = document.getElementById('result');

//Numbers calling
let numbers = document.getElementsByClassName('number');
for (btn of numbers) {
  btn.addEventListener('click', function (event) {
    let btnValue = event.target.innerText;
    resultField.append(btnValue);
  })
}

// = button function
let equel = document.getElementById('equel');
equel.addEventListener('click', function () {
  resultField.innerText = eval(resultField.innerText);
})

// AC button function
let ac = document.getElementById('ac');
ac.addEventListener('click', function () {
  resultField.innerText = '';
})