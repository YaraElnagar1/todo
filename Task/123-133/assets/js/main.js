//1
let setOfNumbers = new Set();

setOfNumbers.add(10);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[2]);

console.log("=".repeat(40));


//2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let newFriends = new Set(myFriends.sort());

console.log(newFriends);


console.log("=".repeat(40));

//3

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let newMap = new Map(Object.entries(myInfo));

console.log(newMap);
console.log(newMap.size);
console.log(newMap.has("role"));

console.log("=".repeat(40));

//4

let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));


console.log("=".repeat(40));

//5

let theName = "Elzero";



console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
console.log(Object.assign([], theName));
console.log([...new Set(theName)]);

console.log("=".repeat(40));


//6

let chars = ["Z", "Y", "A", "D", "E", 10, 1];

chars.copyWithin(2);

console.log(chars);

console.log("=".repeat(40));

//7

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));

numsOne.push(...numsTwo);

console.log(numsOne);



console.log("=".repeat(40));


//8

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Number(Math.max(...n1)) * [...n1, ...n2].length);



