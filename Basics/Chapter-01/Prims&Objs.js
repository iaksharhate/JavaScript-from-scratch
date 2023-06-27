console.log("# Primitives and Objects in JavaScript.\n");
console.log("1) JavaScript have 7 types of Primitives mentioned below :");
console.log("2) Null, Number, String, Symbol, undefined, boolean, BigInt \n");

let a = null;
let b = 123;
let c = true; // can be fale
let d = BigInt(75684);
let e = "Akshar";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g, "\n");

//we can detect the data type of variable by console.log(typeof variableName);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);


console.log("\n## Objects in JavaScript : \n");
// Object are in key value pair and those are non-primitive data types

const user = {
    "name": "Akshar",
    "city": "Panvel",
    "mno": 8850463987
}

console.log(user);
console.log(user["mno"]);
