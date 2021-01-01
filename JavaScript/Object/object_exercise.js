// Add a method called nameLength that prints out the
// length of the employees name to the console.

alert("Hi")

var employee1 = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function() {
    console.log(this.name.length);
  }
}


// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.




var employee2 = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  full_info: function() {
      alert("Name is: "+this.name);
      alert("Job is: "+this.job);
      alert("Age is: "+this.age);
  }
}


var employee3 = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function(){
    alert(this.name.split(" ")[0]);
    console.log(this.name.split(" ")[1]);
  }
}
