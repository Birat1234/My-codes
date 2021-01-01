var a = document.querySelectorAll("td")
var restart = document.querySelector("button")






function clrBoard() {
  for(i=0;i<9;i++){
    a[i].textContent = " ";
  }
}


restart.addEventListener("click",clrBoard);




function game() {
  if(this.textContent === ''){
    this.textContent = 'X';
    // console.log(marker)
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }

};



for (var k = 0; k < 9; k++) {
  a[k].addEventListener("click",game);
}
