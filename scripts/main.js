var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/moe-foto-1.jpg') {
      myImage.setAttribute ('src','images/moe-foto-2.jpg');
    } else {
      myImage.setAttribute ('src','images/moe-foto-1.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
    var myName = prompt('Введите ваше имя:');
    localStorage.setItem('Имя', myName);
    myHeading.textContent = 'Приветствую тебя, ' + myName;
  }
  if(!localStorage.getItem('Имя')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('Имя');
    myHeading.textContent = 'Приветствую тебя, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }