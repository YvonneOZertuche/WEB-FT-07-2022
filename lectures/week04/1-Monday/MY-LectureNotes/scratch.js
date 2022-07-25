
// FizzBuzz
// Use a for loop to print out all the numbers 1 to 30, but insert the word fizz for any number that is divisible by 3, insert the word buzz for any number that is divisible by 5 and insert the word fizz buzz for any numbers that are both divisible by 3 and 5, like 15.

for (num = 1; num < 30; num++){
  if (num % 3 == 0) 
    console.log(num,"fizz")

 else if (num % 5 == 0)
    console.log(num,"buzz")

 else if (num % 3 &&  num % 5)
    console.log("FIZZ BUZZ")   
  

 }   


