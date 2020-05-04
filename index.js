// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick()
// {
//   alert("i got clicked");
// }
var buttons = document.querySelectorAll(".drum").length;

//add event listener to all the buttons // BUTTON PRESS
for (var i = 0; i < buttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    console.log(this); // the button clicked
    var c = this.textContent; // varc c=this.innerHTML;
  //  this.style.color="white";
    makeSound(c);
    buttonAnimation(c);

  }); // using anonymous function
}

//keyboard press
document.addEventListener("keydown", function(event) {
  // alert("key is pressed!");
  console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(c) {
  switch (c) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      console.log(c);
  }
}

function buttonAnimation(currentKey)
{
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function()
{
  activeButton.classList.remove("pressed");
},100);
}
