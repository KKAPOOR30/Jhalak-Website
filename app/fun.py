import math
import random

guesses = 0
num1 = str(random.randint(0,9))
num2 = str(random.randint(0,9))
num3 = str(random.randint(0,9))
num4 = str(random.randint(0,9))
num5 = str(random.randint(0,9))

ans = [num1, num2, num3, num4, num5]

while (True):
    x = input("Guess the password 5 numbers: ") 
    if x == "q":
        print(f"The number was {num1}{num2}{num3}{num4}{num5}")
        break
    correct = 0
    checked = []
    for i in range(5):
        if x[i] == ans[i]:
            correct+=1
        checked.append(x[i])
    if correct == 5:
        print(f"CONGRATS You took {guesses} tries to guess correctly")
        break
    guesses += 1
    print("\n _________________________")
    print(f"Correct: {correct}")
    print("_________________________")


#print(math.log(80,2))