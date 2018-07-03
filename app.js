
const myList = document.getElementsByTagName('li');

for (let i =0; i < myList.length; i +=1){
  myList[i].style.color = 'purple';
}


let myButton = document.getElementById('myButton');

function clicked() {
  let count = 0;
  return function() {
    return ++count;
  }
}
let count = clicked();
myButton.addEventListener('click', function(){
  console.log(count());
 
});





