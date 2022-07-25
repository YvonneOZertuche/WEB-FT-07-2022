let firstName = "Yvonne"
let lastName = "Zertuche"
// console.log(`My name is ${name} ${lastName}.`)

let a = 4
let b = 5

let sum = a + b
// console.log(`The sum of a + b = ${sum}`)

// console.log(name.length)
// console.log(lastName.length)
// console.log(name.length + lastName.length)

// let name = firstName + "  " + lastName
// let indexLastName = name.indexOf(lastName)
// console.log(indexLastName)
// console.log(name)


// Write a program taht compares the value of num1 and num2

// let num1 = 5
// let num2 = 3

// if (num1 > num2){
//   console.log((`${num1} is greater than ${num2}.`))
// } 
// else if (num1 < num2){
//   console.log(`${num1} is less than ${num2}.`)
// }
// else{
//     console.log(`${num1} is equal to ${num2}`)
//   }
// let month = 9
// if (
//   month === 1 ||
//   month === 3 ||
//   month === 5 ||
//   month === 7 ||
//   month === 8 ||
//   month === 10 ||
//   month === 12
// ) {
//   alert('This month has 31 days')
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//   alert('This month has 30 days')
// } else if (month === 2) {
//   alert('This month has 28 days')
// } else {
//   alert('Unknown month!')
// }
let month = 9

let numDays = 31

switch (month) {
  case 4:
  case 6:
  case 9:
  case 11:
    numDays = 30;
    break;
  case 2:
    numDays = 28
    break
  default:
    break
}

console.log(`This month has ${numDays}`)
