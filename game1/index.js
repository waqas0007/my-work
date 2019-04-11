let message = document.querySelector('.message');
let buttons = document.querySelectorAll('button');

for(var i = 0; i < buttons.length; i++){
   console.log( buttons[i]);
   buttons[i].addEventListener('click', taskCoin)
}
function taskCoin(e){
    console.log(e.target.innerText)
}