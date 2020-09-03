def interpolate(a, ta, b, tb, tc):
    return [(b[i] - a[i]) * (1/(tb - ta)) * (tc - ta) + a[i] for i in range(3)]         

if __name__ == '__main__':
    for i in range(50, 55):
        print(interpolate((1, 3, 7), 13, (23, -5, 10), 84, i))
        print("-"*8)
