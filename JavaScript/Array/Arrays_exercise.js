var stu = ["Ujjwal","George","Chiklu","virat"];


function addname() {
  var add = prompt("What name would you like to add? ");
  stu.push(add);
  alert("Thanks for using the Web App! Please refresh the page to start over.");
}


function removename() {
  var remove = prompt("What name would you like to remove? ");
  stu.pop(remove);
  alert("Thanks for using the Web App! Please refresh the page to start over.");

}


function displayname() {
  alert(stu);
  alert("Thanks for using the Web App! Please refresh the page to start over.");

}


var start = prompt("Would you like to start the roster web app? y/n")

if (start == "n") {
  alert("Thanks for using the Web App! Please refresh the page to start over.");
}else if (start == "y") {
  var action = prompt("Please select an action: add, remove, display, or quit.");

  while (action!=="quit") {
    if (action =="add") {
      addname();
      break;
    }else if (action =="remove") {
      removename();
      break;
    }else if (action =="display") {
      displayname();
      break;
    }else {
      var action = prompt("Please select an action: add, remove, display, or quit.");
    }
  }
}
alert("Thanks for using the Web App! Please refresh the page to start over.");




// var quit= alert("Thanks for using the Web App! Please refresh the page to start over.");
