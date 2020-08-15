import os
import pandas
import math

#Program 1
with open(os.path.join(os.path.dirname(__file__), "data", "program1.csv")) as df:
    values_list = [[int(v) for v in l.strip().split(",")] for l in df.readlines()]

dict_ref = {}
for i in range(10):
    dict_ref[i] = 'small' if i < 3 else ("medium" if i < 7 else "large")

text_list = [[dict_ref[v] for v in l] for l in values_list]
print(text_list)
print(list(zip(*text_list)))

#Program 2
with open(os.path.join(os.path.dirname(__file__), "data", "project2.txt")) as df:
    list_tup = [tuple([float(p) for p in d.split(",")]) for d in df.readlines()]

def euclidean_distance(p1, p2):
    return math.sqrt((p2[0] - p1[0])**2 + (p2[1] - p1[0])**2)

distance_list = [euclidean_distance((4, 4), p) for p in list_tup]
result_tup = [d for d in distance_list if d <= 2]
print(len(result_tup), result_tup)
#Program 3
def fibonacci(n=None, mx=None):
    am = 0
    an = 1
    count = 0

    if not n and not mx:
        while True:
            am, an = an, am + an
            yield am
    else:
        while count < n if n else an < mx:
            am, an = an, am + an
            count += 1
            yield am

filt_list = [fib for fib in fibonacci(mx=5000) if fib % 5 == 0]
print(filt_list, len(filt_list))

#Program 4
import re
import csv
with open(os.path.join(os.path.dirname(__file__), "data", "netflix_titles.csv")) as df:
    reader = csv.reader(df)

    movies = [row for row in reader if row[1] == "Movie"]

for m in movies:
    print(m[7])



