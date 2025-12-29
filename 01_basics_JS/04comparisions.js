// console.log(1 == 2)
// console.log(1 >= 2)
// console.log(1 <= 2)
// console.log(1 != 2)

console.log(null == 0) // false
console.log(null > 0)  // false
console.log(null >= 0) // true

// equality check "==" and comparisions ">, <, >=, <=" works differently in JS
// comparision first converts null into zero (number), then compare

// === (strict check) check both number and datatype

// Premitive Datatype: String, Number, Boolean, null, undefined, Symbol, bigint
// pass by value

const Id = Symbol("123")
const anotherId = Symbol("123")

console.log(Id === anotherId)

// Reference: Array, Objects, Functions (non - premitive) (pass by reference)

const arr = ["a", "b", "c"]

let myObj = {
    name: xyz,
    roll: 1
}

const myFunction = function(){
    console.log("function")
}