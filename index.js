var noOfBut = document.querySelectorAll(".drum").length;

console.log(noOfBut)
//button press
for (var i = 0 ; i < noOfBut ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonInHt = this.innerHTML;
    makeSound(buttonInHt);
    buttonAnimation(buttonInHt)
    })
}
 

//keypress
document.addEventListener("keydown", (event)=>{
   makeSound(event.key);
   buttonAnimation(event.key)
})
//function
function makeSound(key){
switch(key){
  case "q" :
      var audio = new Audio("sounds/tom-4.mp3")
      audio.play();
    break;
  case "a" :
      var audio = new Audio("sounds/tom-3.mp3")
      audio.play();
    break;
  case "s" :
      var audio = new Audio("sounds/tom-2.mp3")
      audio.play();
    break;
  case "d" :
      var audio = new Audio("sounds/tom-1.mp3")
      audio.play();
    break;
  case "i" :
      var audio = new Audio("sounds/snare.mp3")
      audio.play();
    break;
  case "o" :
      var audio = new Audio("sounds/kick-bass.mp3")
      audio.play();
    break;
  
  case "p" :
      var audio = new Audio("sounds/crash.mp3")
      audio.play();
    break;

  default: console.log(event.key)

} 
}

function buttonAnimation(currKey){

  var actButton = document.querySelector("." + currKey);
  actButton.classList.add("pressed");

  setTimeout(()=>{
    actButton.classList.remove("pressed"),150
  })
}