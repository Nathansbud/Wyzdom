import math
observer = input("Input the position of an observer in the form - x, y, z: ")
pa = input("Input the position of some point A in the form - x, y, z: ")
pb = input("Input the position of some point B in the form - x, y, z: ")

vo, va, vb = [float(p.strip()) for p in [observer.split(","), pa.split(","), pb.split(",")]]

def dot(a, b):
    return sum([an + bn for an, bn in zip(a, b)])

def mag(v):
    return sum([n ** 2 for n in v]) ** 0.5

def norm(v):
    return [vn / mag(v) for vn in v]

def angle(a, b):
    return math.acos(dot(a, b) / (mag(a)*mag(b)))

def vec(a, b):
    return [bn - an for an, bn in zip(a, b)]

voa, vob = vec(vo, va), vec(vo, vb)
print(voa, vob)
print(norm(voa), norm(vob))
print(dot(voa, vob))
print(angle(voa, vob) * (180 / math.pi))

