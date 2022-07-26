// for (let count = 10; count >= 1 ; count--){
//   console.log(count)
// }

// for (let count = 1; count <= 20; count ++){
//   console.log("Yvonne Zertuche")
// }

// for (let count = 5; count <= 9; count ++){
//    console.log(count)
//   console.log('Yvonne Zertuche')

// }

// for (count = 1; count <= 10; count++){
//   console.log(count*5)
// }

// let n = 5
// let sum = 0
// for (let i = 1; i <= n; i++){
//   sum = sum + i
// }
// console.log(sum)

// let p = 4
// let product = 1
// for (let i = 1; i <= p; i++){
//   product = product * i

// }
//  console.log(product)

// let salary = 58000
// // let newSalary = 58
// for (let i = 0; i <= 4; i++){
//  salary = (salary * 0.02 ) + salary
// //  console.log(salary)

// }
// console.log(salary)
// let sum = 0
// let n  = 10
// for (let i = 0; i <= n; i++){
//   if (i % 2 == 0){
//     sum = sum + i
//     console.log(i)
//   }   
// }
// console.log(sum)

// let num = 100
// console.log(num.toString().length)

// let num = 45623556567822

// let stringOne = num.toString()
// console.log(`The first number is ${stringOne[0]} and the last number is ${stringOne[stringOne.length - 1]}`);

//& 2 Numbers
// Write a function called checkNums that accepts two arguments n1 and n2. The function should check the two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100
// function checkNums(num1, num2){
//   if ((num1 == 100 || num2 == 100 ) || (num1 + num2 == 100)){
//       return true
//   }
//   return false
// }
// console.log(checkNums(50,50))

//Write a for loop that writes out the decimal equivalent of the reciprocals 1/2, 1/3, 1/4, ... , 1/19, 1/20.
// for (i = 1; i <= 20; i++){
//   console.log((`1/${i}`))
// }

// Write a program to find sum of first and last digit of a number.
// let num = 45623556567822
// let stringOne = num.toString()
// console.log(`The first number is ${stringOne[0]} and the last number is ${stringOne[stringOne.length - 1]}`)
// let sum = stringOne[0] + stringOne[stringOne.length - 1]
// console.log(sum)

// Looping through a string
// Create a for loop to print out all the letters in the word 'love' (one letter per line)

// let word = 'love'

// for (let i = 0; i < word.length; i++){
//   console.log(word)
// }
// Use a for loop to print out the spelling of the word mississippi with one letter on each line.

// let word = "mississippi"

// for (i = 0; i < word.length; i++){
//   console.log(word[i])
// }

let str2 = "don't know why";
let haveY= false

for (let i = 0; i < str2.length; i++){
  if(str2[i]  == 'y'){
    haveY = true
  }
}
if (haveY == true){
  console.log("yes")
}
else{
  console.log("no")
}