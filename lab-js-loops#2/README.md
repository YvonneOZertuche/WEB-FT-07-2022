
# Counting

## 1. Write a for loop to count from 1-10

<details>
  <summary>Solution</summary>
  
```js
for(let i = 1; i <= 10; i++){

    console.log(i)
}

```

</details>

## 2. The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0

```js
for (let counter = 0; counter < 4; counter++){
  console.log(counter);
}
```


## 3. Write a for loop to count from 10-1 

<details>
  <summary>Solution</summary>
  
```js
for(let i = 10; i > 0; i--){
    console.log(i);
}
```
  

</details>

## 4. Write a loop that prints out your name 20 times. 
Each time your name is printed, it should be on a new line.

<details>
  <summary>Solution</summary>
  
```js
for (let i = 0; i < 20; i++) {
    
    console.log('Veronica');
    
}
```

</details>

## 5. Create a program that loops from 5 to 10 and logs each number to the console.
<details>
  <summary>Solution</summary>
  
```js
for(let i = 5; i<= 10; i++){
  console.log(i)
}
```
</details>


## 6. Write a program that launches a carousel for 10 turns, showing the turn number each time.
```bash
Turn number: 1
Turn number: 2
Turn number: 3
Turn number: 4
Turn number: 5
Turn number: 6
Turn number: 7
Turn number: 8
Turn number: 9
Turn number: 10
```

<details>
  <summary>Solution</summary>
  
```js
for (let i = 1; i <= 10; i++) {
    console.log(`Turn number: ${i}`)  
}
```

</details>


## 7. Write a program to print all even numbers between 1 to 100. 

This program uses the modulo operator %, which calculates the remainder after division of one number by another. It’s often used to assess number parity.

```js 
console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
```

<details>
  <summary>Solution</summary>
  
```js 
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}

```
  
</details>

## 8. Write a program to print all `odd` number between 1 to 100.

```bash
1 is odd
3 is odd
5 is odd
7 is odd
9 is odd
11 is odd
13 is odd
15 is odd
17 is odd
19 is odd
```

<details>
  <summary>Solution</summary>
  
```js
for (let i = 0; i < 100; i++) {
    if(i % 2 !== 0){
        console.log(`${i} is odd`);
    }   
}
```
  
</details>


## 9. Write a function called `even` that accepts an argument n. 
The function should  print all even numbers up to and including n. Don’t include 0

<details>
  <summary>Solution</summary>
  
```js
function even(n){
    for (let i = 1; i <= n; i++) {
        if(i % 2 == 0){
            console.log(i);
        }   
    }

}

even(20)
```
  
</details>


## 10. Write a for loop to multiply numbers 1-10 by 5 (i.e. 5, 10, 15, 20, 25)

<details>
  <summary>Solution</summary>
  
```js
for(let i = 1; i<=10; i++){
    console.log(i * 5)
}
```
 
</details>


## 11. Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.

```js 
let num1 = 2; 
let num2 = 8; 
// Example output: 
// 1 + 2 = 3
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36 
```

<details>
  <summary>Solution</summary>
  
```js
let num = 10 
let sum = 0 

for(let i =1; i<=num; i++){
  sum += i;
}

console.log(sum)
```

</details>

## 12. FizzBuzz
Use a for loop to print out all the numbers 1 to 30, but insert the word fizz for any number that is divisible by 3, insert the word buzz for any number that is divisible by 5 and insert the word fizz buzz for any numbers that are both divisible by 3 and 5, like 15.

<details>
  <summary>Solution</summary>
  
```js
for(let i = 1; i<=30; i++){

    if(i % 15 == 0){
        console.log('fizz buzz')
    }
    else if(i % 5 == 0){
        console.log('buzz')
    }
    else if(i % 3 == 0){
        console.log('fizz')
    }
    else{
        console.log(i)
    }
}
```

</details>

## 13. 2 Numbers
Write a function called `checkNums` that accepts two arguments `n1` and `n2`. The function should check the two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100

<details>
  <summary>Solution</summary>
  
```js

```

</details>

## 14. Salary
An employee starts with an annual salary of 58 thousand dollars. Print out the employees salary each year for five years if the employee receives a 2.5 percent (0.02) raise each year.

<details>
  <summary>Solution</summary>
  
```js
let salary = 58000 

for (let year = 1; year <= 5; year++) {
    
    salary = salary + salary * .02; 
    console.log(salary)
    
}

```

</details>

## 15. Fractions
Write a for loop that writes out the decimal equivalent of the reciprocals 1/2, 1/3,
1/4, ... , 1/19, 1/20.


<details>
  <summary>Solution</summary>
  
```js
for (let denom = 1; denom <= 20; denom++) {
    console.log(`${1/denom}`)  
}
```

</details>

## 16. Factorial
Given a number n Calculate the factorial of the number

```js 
let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24
```

<details>
  <summary>Solution</summary>
  
```js
let n = 4 
let factorial = 1
for (let i = n; i >= 1; i--) {
    
    factorial = factorial * i

}

console.log(factorial);
```

</details>

## 17. Write a program to sum of all even numbers between 1 to n.

<details>
  <summary>Solution</summary>
  
```js
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    if(i % 2 == 0){
        sum += i;
    }
    
}

console.log(sum)
```

</details>

## 18. Write a program to count the number of digits in a number.

<details>
  <summary>Solution</summary>
  
```js
let n = 20 
let sum = 0;
for (let i = 1; i <= n; i++) {

    if( i % 2 == 0){
        sum += i;
    }
}

console.log(sum)
```

</details>

## 19. Write a program to find first and last digit of a number.

<details>
  <summary>Solution</summary>
  
```js
let num = 45623556567822 

let numStr = num.toString() 

console.log(`first ${numStr[0]} last ${numStr[numStr.length - 1]}`);
```

</details>

## 20. Write a program to find sum of first and last digit of a number.

<details>
  <summary>Solution</summary>
  
```js
let num = 45623556567822 

let numStr = num.toString() 
let firstNum = parseInt(numStr[0])
let lastNum = parseInt(numStr[numStr.length - 1])

console.log(`sum of first and last numbers =  ${firstNum + lastNum}`);
```

</details>



# Looping through a string

## 1. Create a for loop to print out all the letters in the word `'love'` (one letter per line)

<details>
  <summary>Solution</summary>
  
```js
let word = "love"

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    
}

```

</details>

## 2. Use a for loop to print out the spelling of the word mississippi with one letter on each line.

<details>
  <summary>Solution</summary>
  
```js
let word = "mississippi"

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    
}
```

</details>


# 3. Contains 'y'
Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
```js
let str2 = "don’t know why";
```

Example output: “yes


<details>
  <summary>Solution</summary>
  
```js
for (let i = 0; i < str2.length; i++) {
    
    if(str2[i] == 'y'){
        console.log('yes');
        break;
    }
    else{
      console.log('no');
    }
    
}

// I want you to loop like above, but could have been solved like below 

if(str2.includes('y')){
    console.log('yes');
}
else{
    console.log('no');
}

```

</details>

## 4.  Given a string change the every second letter to an uppercase `‘Z’`. 
Assume there are no spaces.

```js 
let str1 = "javascript";  
// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 
```

<details>
  <summary>Solution</summary>
  
```js
let str1 = "javascript";
let str1Arr = str1.split('')

for (let i = 0; i < str1Arr.length; i++) {
    if ((i+1) % 2 == 0 ) {
        str1Arr[i] = "Z"
    }
    
}

str1 = str1Arr.join('')
console.log(str1);

```

</details>


## 5. Palindromes
Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.

Palindrome: a word, phrase, or sequence that reads the same backward as
forward, e.g., `madam` or `nurses run`

```js 
let str3 = "racecar";
let str4 = "Java";
// Example output:
// string1 palindrome?: 
// Yes 
// string2 palindrome?: 
// No
```

<details>
  <summary>Solution</summary>
  
```js
let str3 = "racecar";
let str4 = "Java";

function palindrome(word){

    let backwardsCounter = word.length - 1
    let isPalindrome = false;

    for(let i = 0; i< word.length-1; i++){

        if(word[i] != word[backwardsCounter] ){
            
            return false;
        }

        backwardsCounter--;

        if(i > backwardsCounter){
            break;
        }

    }

    return true
}

console.log(palindrome(str3))
console.log(palindrome(str4))
```

</details>


# Looping Through an Array

## 1. Given an array `[1,2,3,4]`, print out all the values in the array.

<details>
  <summary>Solution</summary>
  
```js
let arr = [1,2,3,4]

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    
} 
```

</details>


## 2. Use a for loop to print out the days of the week. Print each day of the week on its own line.

<details>
  <summary>Solution</summary>
  
```js
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

for (let index = 0; index < days.length; index++) {
    console.log(days[index]);
    
}
```

</details>


## 3.  Given an array `[1,2,3,4,5,6]` return a new array of all the even values (`[2,4,6]`)

<details>
  <summary>Solution</summary>
  
```js

```

</details>

## 4. For all the numbers between 1 and 100, return a list with all the numbers that are divisible by 12 (`[12, 24, 36, 48, 60, 72, 84, 96]`).

<details>
  <summary>Solution</summary>
  
```js

```

</details>


## 5. Use a for loop to sum the elements in the list `[1,3,5,8,12]`

<details>
  <summary>Solution</summary>
  
```js

```

</details>

## 6. Sales

- Set an array of twelve monthly sales figures (in $K)
- Use a for loop to find the month with the minimum sales
- and the month with the maximum sales, as well as the
- values for those months.


```js
 let sales = [17.2, 16.5, 18.3, 19.3, 17.8, 21.3, 22.4,
   22.0, 19.9, 23.3, 21.7, 22.2];

```

<details>
  <summary>Solution</summary>
  
```js

```

</details>


## 7. Get the max number 

<details>
  <summary>Solution</summary>
  
```js

```

</details>

## 8. Get the min number from array

<details>
  <summary>Solution</summary>
  
```js

```

</details>


## 9. Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too.

```js
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627
```

<details>
  <summary>Solution</summary>
  
```js

```

</details>

## 10. Using a for loop output the elements in reverse order
```js
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
```

<details>
  <summary>Solution</summary>
  
```js

```

</details>


## 11. Add elements in 2 arrays
Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length.

```js
let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// Example output: 
// [12, 7, 16]
```

<details>
  <summary>Solution</summary>
  
```js

```

</details>


## Looping through an array of objects 


## 1. Transform array to an object
Given an array `[ ["name", "Elie"], ["job", "Instructor"] ]` create an object that looks like this `{'job': 'Instructor', 'name': 'Elie'}`


<details>
  <summary>Solution</summary>
  
```js

```

</details>


## 2. Combine information in 2 arrays 

Given two arrays `["CA", "NJ", "RI"]` and `["California", "New Jersey", "Rhode Island"]` return an object that looks like this `{'CA': 'California', 'NJ': 'New Jersey', 'RI': 'Rhode Island'}`

<details>
  <summary>Solution</summary>
  
```js

```

</details>


## 3. Create an alphabet object 
Create an object with the key as a vowel in the alphabet and the value as 0. Your object should look like this `{'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}`

<details>
  <summary>Solution</summary>
  
```js

```

</details>


## 4. Object map 
Write a program to find frequency of each digit in a given integer.
i.e. let digit = 896787342389 

```js 
{
  8: 3,
  9: 2,
  6: 1, 
  7: 2,
  3: 2,
  4: 1,
  2: 1
}

```

<details>
  <summary>Solution</summary>
  
```js

```
