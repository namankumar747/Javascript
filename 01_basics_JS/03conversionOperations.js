let score = "33"
// let score = "33abc"
// let score = "xyz"
// let score =  true
// let score = null
// let score = undefined

console.log(typeof score) //string
let valToNumber = Number(score) // conversion to number
console.log(valToNumber)

// "33" => 33 (number)
// "33abc" => NaN (number)
// "xyz" => NaN (number)
// true => 1 (number)
// undefined => NaN (number)
// null => 0 (number)

let isLogged = 1
// let isLogged = ""
// let isLogged = "xyz"
let booleanLogged = Boolean(isLogged)
console.log(booleanLogged)

// 1 => true
// "" => false
// "xyz" => true

let val = true
let stringval = String(val)
console.log(stringval)
console.log(typeof stringval)

// 33 => "33"
// true => "true"

//****************************** Operations ****************************************
console.log(1 + "2") // 12 string
console.log(1 + 2 + "2") // 32 string
console.log("1" + 2 + 2) // 122 string

let counter = 0
counter++; // postfix increment
++counter // prefix increment

// type Conversion Link: https://tc39.es/ecma262/multipage/abstract-operations.html
// increment Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
