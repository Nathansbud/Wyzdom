def widgets(days):
    return 10 * min(10, days) + 40 * min(50, days - 10) * (days > 10) + sum([100 - i for i in range(61, min(days+1, 101))]) 

def quadratic(a, b, c):
    det = (b ** 2 - 4*a*c)**0.5
    return (-b + det) / (2*a), (-b - det) / (2*a)

