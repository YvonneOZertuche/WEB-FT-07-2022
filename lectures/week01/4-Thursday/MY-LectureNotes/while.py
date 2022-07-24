
#1. Create a program that will print from 1-10 using a while loop.
# i = 1
# while i <= 10:
#    print(f"The numbers forward are: {i}")
#    i +=1
   
# print(" ")
# print("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
# print(" ")
#2. Create a program that will print from 10-1 using a while loop.

# i = 10
# while i > 0:
#   print(f"The numbers backwards are: {i}")
#   i -=1

#3. Create a program that prompts the user to enter a word.  The program doesn't stop asking the user to enter a word until the user enters the word "stop"

# word = " "
# print("Please enter a word, when you are ready to quit enter 'stop'.")
# while word != "stop" :  
#   word = input("Please enter a word.   ")
# print("GoodBye!")  
  

#4a. Create a program that has a variable named username and another variabled named password with values of your choice.

userName = "Tweedle"
passWord = "Dee"

#4b. Prompt the user for a username and then a password.

user_name = input("Please enter your Username.  ")
pass_word = input("Please enter your Password.  ")

#4c. If the both match continue on with the program and give a welcome message.
i = 0
while i < 3:
  if userName == user_name and passWord == pass_word:
    print(f"Hello {user_name}!")   
  else:
    print("Please try again.") 

#4d. If not it prompts the user for the username and password until they get it correct.

#4e. (bonus) have a limited amount of attempts and if they reach the limit it tells the user and exits the program.
