let resultField = document.getElementById('result');

//Numbers calling
let numbers = document.getElementsByClassName('number');
for (btn of numbers) {
  btn.addEventListener('click', function (event) {
    let btnValue = event.target.innerText;
    resultField.append(btnValue);
  })
}
//Operators calling
let operates = document.getElementsByClassName('operate');
for (btn of operates) {
  btn.addEventListener('click', function (event) {
    let btnValue = event.target.innerText;
    resultField.append(btnValue);
  })
}

// AC button function
let ac = document.getElementById('ac');
ac.addEventListener('click', function () {
  resultField.innerText = '';
})


// = button function
let equel = document.getElementById('equel');
equel.addEventListener('click', function () {
  console.log('= clicked');
  resultField.innerText = parseFloat(resultField.innerText);
})

