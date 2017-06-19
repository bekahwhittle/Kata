
var btnCounter = document.getElementById('counter');
btnCounter.innerHTML = 0;

btnCounter.addEventListener('click', function buttonClick () {
  btnCounter.innerHTML ++;
  console.log("HELLO WORLD");
})

console.log(btnCounter);
