import random
import time

items_to_record = ["cat", "dog", "car", "bird", "tree"]
random.shuffle(items_to_record)

print("Welcome to the Recording Game!")
print("Get ready to record these items: ", ", ".join(items_to_record))
time.sleep(2)

score = 0
for item in items_to_record:
    print("\nRecord this: ", item)
    guess = input("Type it here: ")

    if guess.lower() == item:
        print("Great! You recorded it!")
        score += 1
    else:
        print("Oops, that's not right!")

print("\nGame Over!")
print(f"Your score: {score}/{len(items_to_record)}")
if score == len(items_to_record):
    print("You're a recording master!")
else:
    print("Keep practicing to get better!")