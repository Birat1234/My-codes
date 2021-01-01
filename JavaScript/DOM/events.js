var hone = document.getElementById("one")
var htwo = document.getElementById("two")
var hthree = document.getElementById("three")



hone.addEventListener("mouseover",function() {
  hone.textContent = "Hovered";
  hone.style.color = "red";
})


hone.addEventListener("mouseout",function() {
  hone.textContent = "Hover me!";
  hone.style.color = "black";
})


htwo.addEventListener("click",function() {
  htwo.textContent = "Clicked on";
  htwo.style.color = "blue";
})


hthree.addEventListener("dblclick",function() {
  hthree.textContent = "Already double clicked";
  hthree.style.color = "green";
})
