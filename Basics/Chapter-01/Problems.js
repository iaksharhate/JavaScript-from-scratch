// Problem 01
// Create a variable of type string and try to add number to it.

let a = "Akshar";
let b = 100;
// When we add any thing to string it will be concatenated.
console.log(a + b);
// Output = Akshar100


// Problem 02
// Use typeof operator to find data type of fist question.

console.log("\n",typeof (a+b));
// Output = string


// Problem 03
// Change const object to hond number later.

const user = {
    name : "Akshar",
    city : "Panvel",
    mno : 8850463987
}

// user = 20;
// Output : TypeError TypeError: Assignment to constant variable.


// Problem 04
// Add new key to const object.

user['age'] = 24;
console.log(user);
// Output : {name: 'Akshar', city: 'Panvel', mno: 8850463987, age: 24}

user['name'] = "Tiger";
console.log(user);
// Output : {name: 'Tiger', city: 'Panvel', mno: 8850463987, age: 24}