import math
ke = lambda m, v: 0.5 * m * (v ** 2)
reynolds = lambda rho, v, kv, ld: (rho * v * ld) / kv
inertia = lambda b, h: (b * (h ** 3))/3

def stdev(l):
    mean = sum(l) / len(l) if len(l) > 0 else 0
    return (sum([(n - mean)**2 for n in l]) / len(l))**0.5 if mean != 0 else 0

