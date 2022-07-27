// ingredients = ['milk', 'sugar', 'vanilla extract', 'dough', 'chocolate']
// // Write a for loop that prints out each of the ingredients above

// for (let i = 0; i  <= ingredients.length-1; i++){
//   console.log(ingredients[i])

// Given a list [1,2,3,4], print out all the values in the list.

// list  = [1, 2, 3, 4]
// for (let i = 0; i < list.length; i++){
//   console.log(list[i])
// }

// Write a for loop that prints each sport in the list sport_games
// sport_games = ["football", "hockey", "baseball", "cricket"]

// for(let i = 0; i < sport_games.length; i++){
//   console.log(sport_games[i])
// }

// Sum the Numbers
// arr = [4, 2, 5, 7, 23, 6, 5]
// let sum = 0
// for (let i = 0; i < arr.length; i++){
  
//   sum = sum + arr[i]
// }
// console.log(sum)

// Print the largest number in the list.
// arr = [4, 2, 5, 7, 23, 6, 5]
// let larger = 0
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] > larger){
//     larger = arr[i]
//     console.log(larger)
//   }
// }
// console.log(larger)

// Print the smallest number in the list.
// arr = [4, 2, 5, 7, 23, 6, 5]
// smallest = arr[0]
// for(let i = 0; i < arr.length; i++){
//   if (arr[i] < smallest){
//     smallest = arr[i]
//     console.log(smallest)
//   }
// }
// console.log(smallest)

// Print each number in the list that is even
// arr = [4, 2, 5, 7, 23, 6, 5]
// let even = []
// for(let i = 0; i < arr.length; i++){
//   if (arr[i] % 2 == 0){
//     console.log(arr[i])
//   }
// }
// Print each number that is greater than zero
// arr = [4, 2, -5, 7, -23, 6, -5]
// for (i = 0; i < arr.length; i++){
//   if (arr[i] > 0){
//     console.log(arr[i])
//   }
// }

// For all the numbers between 1 and 100, return a list with all the numbers that are divisible by 12 ([12, 24, 36, 48, 60, 72, 84, 96]).
let newArray = []
for (let i = 1; i < 100; i++){
  if (i  % 12 == 0){
    newArray.push(i)
  
  // console.log(i)
  }
}
console.log(newArray)

//  Given a list [1,2,3,4], print out all the values in the list multiplied by 20.
// let list = [1, 2, 3, 4]
// let multipliers = []
// for(let i = 0; i < list.length; i++){
//  list[i] *= 20
//   console.log(list[i])
// }
// console.log(multipliers)

//  Given a list [1,2,3,4], print out all the values 
// let list = [1, 2, 3, 4]

// for(let i = 0; i < list.length; i++){

//   console.log(list[i])
// }

// Use a for loop to print out the days of the week. Print each day of the week on its own line.

// Use a for loop to print out the days of the week. Print each day of the week on its own line.

// Given an array [1,2,3,4,5,6] return a new array of all the even values ([2,4,6])

// return a new array of all even values
let array = [1, 2, 3, 4, 5, 6] 
let evenArray = []
for (let i = 0; i < array.length; i++){
  if ( array[i] % 2 == 0){
    evenArray.push(array[i])
  }  
}
console.log(evenArray)