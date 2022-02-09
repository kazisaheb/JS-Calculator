let result = document.getElementById('result');
console.log(result);
let buttons = document.getElementsByTagName('button');

for (btn of buttons) {
  btn.addEventListener('click', function (event) {
    result.value = event.target.innerText * event.target.innerText;
  })
}