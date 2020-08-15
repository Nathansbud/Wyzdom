if __name__ == '__main__':

    #corpus 1 / corpus 2, corpus 2 / corpus 1
    print(2/1, 1/2)

    #corpus 1 / corpus 2, corpus 2 / corpus 1
    print(1 / 3, 3 / 1)

    ratio = 1/3
    if ratio < 1:
        print(f"word is {1 / ratio}x as likely to appear in corpus 2 as in corpus 1")
    elif ratio > 1:
        print(f"word is {ratio}x as likely to appear in corpus 1 as in corpus 2")
    else:
        print(f"word is equally likely to appear in both corpuses")


    print("word is 1/3x as likely to appear in corpus 1 as in corpus 2")


