class Car{
  constructor(name, model, price){
      this.n = name;
      this.m = model;
      this.p = price;
  }
  run(){
      return `Car Is Running Now`;
  }
  stop(){
      return `Car Is Stopped`;
  }
}
let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("Fiat", 2020, 300000);
let carThree = new Car("Lada", 2005, 50000);



console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.run());
console.log(`Car One Name Is ${carTwo.n} And Model Is ${carTwo.m} And Price Is ${carTwo.p}`);
console.log(carTwo.stop());
console.log(`Car One Name Is ${carThree.n} And Model Is ${carThree.m} And Price Is ${carThree.p}`);
console.log(carThree.run());

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"

console.log("=".repeat(50));


class Phone {
  constructor(name, serial, price) {
      this.name = name;
      this.serial = serial;
      this.price = price;
  }
}

class Tablet extends Phone {
  constructor(name, serial, price, size){
      super(name, serial, price);
      this.size = size || "Unknown";
  }
  fullDetails(){
      return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
  }
}
// Write Tablet Class Here

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

console.log("=".repeat(50));


// Edit The Class
class User {
  #c;
  constructor(username, card) {
      this.u = username;
      this.#c = card;
  }
  creditCard(){
      return  this.#c.toString().match(/\d{4}/g).join("-");
  }
  get showData(){
      return `Hello ${this.u} Your Credit Card Number Is ${this.creditCard()}`
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

console.log("=".repeat(50));


// Write Your Code Here
String.prototype.addLove = function(){
  return `I Love ${this} School`;
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
console.log("=".repeat(50));


const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here

Object.defineProperty(myObj, "score",{
  writable: false,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(myObj, "id",{
  writable: true,
  enumerable: false,
  configurable: true,
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

"username => Elzero"
"score => 1000"
{username: 'Elzero'; score: 1000; id: 100}

