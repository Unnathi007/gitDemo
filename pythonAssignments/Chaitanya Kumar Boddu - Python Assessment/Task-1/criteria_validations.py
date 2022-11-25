def range_char(start, stop):
    return (chr(n) for n in range(ord(start), ord(stop) + 1))

# 1. At least 1 letter between[a-z]
def check_small_letters(password):
    flag = False
    for i in password:
        if ((i) in range_char("a", "z")):
            flag = True
    return flag

# 2. At least 1 number between[0-9]
def check_numerics(password):
    flag = False
    for i in password:
        if (i.isdigit()):
            flag = True
    return flag

# 3. At least 1 letter between[A-Z]
def check_cap_letters(password):
    flag = False
    for i in password:
        if(i in range_char("A","Z")):
            flag = True
    return flag

# 4. At least 1 character from $ or  # or @ or !
def check_spl_chars(password):
    flag = False
    allowed_chars = ("$","#","@","!")
    for i in password:
        
        if (not(i.isalnum())):
            if(i in allowed_chars):
                flag = True
    return flag

# 5. Minimum length of password: 6
def check_min_length(password):
    flag = False
    if( len(password) >= 6):
        flag = True
    return flag

# 6. Maximum length of password: 12
def check_max_length(password):
    flag = True
    if (len(password) > 12):
        flag = False
    return flag
        
        
