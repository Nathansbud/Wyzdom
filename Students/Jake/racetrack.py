import math

radius = 1000
circumference = lambda r: 2 * math.pi * r

def track_interpolate(a, ta, b, tb, tc):
    return (tc - ta) * ((b - a) / (tb - ta)) + a


if __name__ == '__main__':
    meters = track_interpolate(50, 30, 615, 45, 115)
    print(meters)
    sign = -1 if meters < 0 else 1
    displacement = (sign * meters) % circumference(radius)
    print(displacement)
    proportion = displacement / circumference(radius)

    if proportion == 0.5: print(f"At the halfway point, {displacement}m!")
    elif proportion == 0: print("At the starting line (0m)!")
    else:
        if sign == -1:
            if 1 > proportion > 0.5: print(f"{displacement}m from the starting line!")
            else: print(f"{circumference(radius)  - displacement}m to the starting line!")
        else:
            if 0.5 > proportion > 0: print(f"{displacement}m from the starting line!")
            else: print(f"{circumference(radius)  - displacement}m to the starting line!")