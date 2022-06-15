var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  
}

function count(){
  (count <= -1);
  count === false;
}
document.getElementById("#menos").addEventListener('click', count);

function compara(num1, num2){

  if (num1 == num2){
     return true;
  }
 
  console.log(compara(10, 10));
}

