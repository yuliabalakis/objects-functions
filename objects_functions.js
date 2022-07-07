/* - Create a car object, add a color property to it with the value equals 'black' */
/* - Change the color property of the car object to 'green' */
/* - Add the power property to the car object, which is a function and displays the engine power to the console */
const car1 = {
    color: "black"
};
car1.color = "green";
car1.power = function powerOfMotor(){
    console.log(100);
}
console.log(car1.color);
car1.power();

/* - Pears and apples are accepted to the warehouse, write a function 
that returns the result of adding the number of accepted pears and apples */
function sum(pers, apples){
    return pers + apples;
}
const result1 = sum(5, 10);
console.log(result1);

/* - Your name is saved in the payment terminal, write a function to define the 
name in the terminal (if you entered your name, then hello + name, if not, then there is no such name) */

    function sayHi(userName) {
        if (userName === "John") {
      console.log("Hello, " + userName);
    } else {
      console.log("No such name"); 
    }
  };
  sayHi("John");

  /* - Write a function for calculating the type of argument and type output to the console */
  /* let a = "10"; */
  function type(title){
      console.log(typeof title);
  }
  type("3");
   
/*   - Write a function that determines whether a number is prime or not */
 
  function isPrime(num){
      for (let i = 2, max = Math.sqrt(num); i <= max; i++){
          if (num % i === 0){
              return false;
            }
      }
         return num > 1;
    }
 console.log(isPrime(11));

 
 const prime = n => {
   const bound = Math.floor(Math.sqrt(n));
   for (i = 2; i <= bound; i++) if (n % i === 0) return false;
   return n > 1;
 }
 console.log(prime(11));