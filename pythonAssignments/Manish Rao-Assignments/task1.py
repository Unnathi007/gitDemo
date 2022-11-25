# Write a Object oriented program to check whether the password is valid or not
# Following are the criteria for checking the password:

# 1. At least 1 letter between [g-z]
# 2. At least 1 number between [6-9]
# 3. At least 1 letter between [A-Z]
# 4. At least 1 character from $ or # or @ or !
# 5. Minimum length of password: 6
# 6. Maximum length of password: 12

# Your program should accept a sequence of comma separated passwords and will check them according to the above criteria
class Check:
    def __init__(self, password):
        self.password=password
    def validation6(self):
        length=len(self.password)
        if length>12:
            return False
        return True
    def validation5(self):
        length=len(self.password)
        if length<6:
            return False
        return True
    def validation4(self):
        specialChars=['$', '#', '@', '!']
        for i in self.password:
            if i in specialChars:
                return True
        return False
    def validation3(self):
        alphas=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        for i in self.password:
            if i in alphas:
                return True
        return False
    def validation2(self):
        numbers=['1','2','3','4','5','6','7','8','9']
        for i in self.password:
            if i in numbers:
                return True
        return False
    def validation1(self):
        letter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        for i in self.password:
            if i in letter:
                return True
        return False
      
passwords=[]
passwords=input("Enter the list of Passwords: ").split(",")
finalOp=[]

for password in passwords:
    obj=Check(password)
    if obj.validation1() and obj.validation2() and obj.validation3() and obj.validation4() and obj.validation5() and obj.validation6():        
        finalOp.append(password)
    else:
        continue
if len(finalOp)>0:
    print("The Valid Passwords are:")
else:
    print("Sorry! No valid passwords in the given list")
for result in finalOp:
    print(result, end=",")
        
