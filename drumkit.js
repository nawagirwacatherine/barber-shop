var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i= 0; i<numberOfDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(){
  var audio = new Audio("sounds/sound2.m4a");
  audio.play();
});

}