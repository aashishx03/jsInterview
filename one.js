myFun();

var myFun = function () {
  console.log("First");
};

myFun();

function myFun() {
  console.log("Second");
}

myFun();

// here it happens because the declaration function is overrided by expression function
