from collections import Counter
import sys
import __main__ as main

def num_frequency():
    try:
        frequency = Counter([int(n) for n in sys.argv[1:]]).most_common()
        print(f"Most frequent: {frequency[0][0]} ({frequency[0][1]})" if len(
            frequency) > 0 else "Must have at least 1 number as input!")
    except ValueError:
        print("All inputs must be numbers!")

def word_frequency():
    if len(sys.argv) >= 2:
        with open(sys.argv[1]) as wf:
            lines = wf.readlines()
            words = [w.lower() for line in lines for w in line.split()]
            counter = Counter(words).most_common()
            print("Num Lines: ", len(lines))
            print("Num Words: ", len(words))
            print("Num Characters: ", sum([len(line) for line in lines]))
            print("Unique Words: ", len(counter))
            print("Most Common: ", counter[0])
            print("Least Common: ", counter[-1])

if __name__ == '__main__':
    word_frequency()
    print(hasattr(main, __file__))
