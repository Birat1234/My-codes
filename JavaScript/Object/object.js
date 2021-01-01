var carInfo = { Brand: "Toyota", year: 1990 , model: "Camry" };


var mess = { a: "hello", b: ['x','y','z'] , c: {'inside': [ 4 ,5, ["weird","Boo"]]}};


for (var key in carInfo) {
  // Remember there is no order!
  console.log(key)
  console.log(carInfo[key])
  console.log("\n")
}


var carInformation = { make: "Toyota",
  year: 1990 ,
  model: "Camry",
  alert: function() {

    alert("Hey, we got a car here.")
  }


};


var new_car = { make: "Toyota",
  year: 1990 ,
  model: "Camry",
  name: function() {
    alert("The model is " + this.model)
  }

};





var carInnfo = {
  make: "Toyota",
  year: 1990 ,
  model: "Camry" ,
  carAlert: function(){
    alert('Your car info is, make: '+this.make+ " year: "+this.year+ " model:"+this.model)
  }
};
