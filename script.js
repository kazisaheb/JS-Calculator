let resultField = document.getElementById('result');

let buttons = document.getElementsByTagName('button');

for (btn of buttons) {
  btn.addEventListener('click', function (event) {
    let btnValue = event.target.innerText;
    resultField.append(btnValue);
  })
}

let ac = document.getElementById('ac');
ac.addEventListener('click', function () {
  resultField.innerText = '';
})

