console.log("inside of external js file");

let firstName = 'Yvonne'
let lastName = 'Zertuche'
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

let fruit  = 'Papayas'
if (fruit == 'Oranges') {
  console.log('Oranges are $0.59 a pound.')
} 
else if (fruit == 'Mangoes') {
} 
else if (fruit == 'Papayas') {
  console.log('Mangoes and papayas are $2.79 a pound.')
  // expected output: "Mangoes and papayas are $2.79 a pound."
} else {
  console.log('Sorry, we are out of ' + fruit + '.')
}
