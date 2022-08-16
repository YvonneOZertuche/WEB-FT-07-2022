//config app.js file

let myName = require('./ourModules/stringMod.js') 
let mathFunctions = require('./ourModules/sum')

let arr = [1,2,3,4]

let result1 = mathFunctions.sum(arr)
let result2 = mathFunctions.product(arr)

console.log(result1, result2)