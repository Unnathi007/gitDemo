def PasswordValidator(p):
    s = False
    c = False
    n = False
    sc = False
    ml = False
    mal = False
    if (len(p) >= 6 and len(p) <= 9):
        ml = True
        mal = True
    else:
        return False
    for i in p:
        if ord(i) >= ord('a') and ord(i) <= ord('z'):
            s = True
        elif ord(i) >= ord('A') and ord(i) <= ord('Z'):
            c = True
        elif i.isdigit() and (int(i) >= 6 or int(i) <= 9):
            n = True
        elif i == "$" or i == "#" or i == "@" or i == "!":
            sc = True
    if s and c and n and sc:
        return True
    else:
        return False


if __name__ == "__main__":
    l = list(map(str, input().split(",")))
    l1 = []
    for i in l:
        if (PasswordValidator(i)):
            l1.append(i)
    print(l1)
