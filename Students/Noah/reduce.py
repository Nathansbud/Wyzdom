from functools import reduce

def mean(l): 
    return reduce(lambda x, y: x + y, l) / len(l) if len(l) > 0 else 0

def div(k): 
    return lambda n: k % n == 0

def prime(n):
    return not any(map(div(n), range(2, round(n ** 0.5) + 1)))

if __name__ == "__main__":
    for n in range(2, 100): 
        print(f"{n}, {prime(n)}")
    