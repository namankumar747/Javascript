const accountId = 123 //value once assigned cannot be changed
let accountEmail = "xyx@gmail.com"
var accountPswd = "123345"
accountCity = "XYZ"
let accountState

// accountId = 2 //not allowed due to const
/* prefer not to use var
because of issue in block scope and function scope
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPswd, accountCity, accountState])
