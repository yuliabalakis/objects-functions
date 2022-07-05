const car1 = {
    color: "black"
};
console.log(car1.color);

const car2 = {
    color: "black"
};
car2.color = "green";
console.log(car2.color);

let car3 = {
    color: "green",
    power(){
        console.log(100)
    }
};
car3.power();

let car = {
    color: "green",
    power
};
    function power(powerCar){
    return powerCar;
};
const result = power(100);
console.log("resuilt is: ", result);


function sum(pers, apples){
    return pers + apples;
}
const result1 = sum(5, 10);
console.log(result1);

let name1 = "John";
function sayHi() {
    if (name1=="John") {
      console.log("Hello, " + name1);
    } else {
      console.log("No such name"); 
    }
  };
  sayHi();

  let a = "10";
  function type(){
      console.log(typeof a);
  }
  type();
   
  let num = 11;
  let flag = true;
  function isPrime() {
        for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
            break;
    }
} 
console.log(flag);
  }
  isPrime();