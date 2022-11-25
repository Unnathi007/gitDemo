# Task 1:
# --------------
# Write a Object oriented program to check whether the password is valid or not
# Following are the criteria for checking the password:

# 1. At least 1 letter between [g-z]
# 2. At least 1 number between [6-9]
# 3. At least 1 letter between [A-Z]
# 4. At least 1 character from $ or # or @ or !
# 5. Minimum length of password: 6
# 6. Maximum length of password: 12

# Your program should accept a sequence of comma separated passwords and will check them according to the above criteria. 

# Example:
# If the following passwords are given as input to the program:
# ABd1234@1,a F1#,2w3E*,2We3345
# Then, the output of the program should be:
# ABd1234@1

# Passwords that match the criteria are to be printed, each separated by a comma.

# - ensure that the code is implemented with proper exception handling.
# - validations wherever it is required
# - write the test case for each of the criteria mentioned above.
# - create a test suite with all the test cases and create the final html report


import re
class PasswordCheck:
    def __init__(self,pwd):
        try:
            self.pwdList=pwd
            if(pwd==[]):
                raise Exception("Empty List")
        except Exception as err:
            print(err)
    
    @property
    def password(self):
        return self.pwdList
    
    @password.setter
    def password(self,l):
        self.pwdList=l

    def checkSmall(self):
        try:
            validPwd=[]
            for pwd in self.pwdList:
                if(bool(re.search("[a-z]{1,}",pwd))):
                    validPwd.append(pwd)
            return validPwd
        except Exception as err:
            print(err)

    def checkNum(self):
        try:
            validPwd=[]
            for pwd in self.pwdList:
                if(bool(re.search("[0-9]{1,}",pwd))):
                    validPwd.append(pwd)
            return validPwd
        except Exception as err:
            print(err)

    def checkCap(self):
        try:
            validPwd=[]
            for pwd in self.pwdList:
                if(bool(re.search("[A-Z]{1,}",pwd))):
                    validPwd.append(pwd)
            return validPwd
        except Exception as err:
            print(err)

    def checkSpecialChar(self):
        try:
            validPwd=[]
            for pwd in self.pwdList:
                if(bool(re.search("[$,#,@,!]{1,}",pwd))):
                    validPwd.append(pwd)
            return validPwd
        except Exception as err:
            print(err)

    def checkLength(self):
        try:
            validPwd=[]
            for pwd in self.pwdList:
                if(bool(re.search("^.{6,12}$",pwd))):
                    validPwd.append(pwd)
            return validPwd
        except Exception as err:
            print(err)
            
    def isValid(self):
        try:
            validPwd=[]
            for pwd in self.pwdList:
                if(pwd in self.checkCap() and pwd in self.checkLength() and pwd in self.checkNum() and pwd in self.checkSmall() and pwd in self.checkSpecialChar()):
                    validPwd.append(pwd)
            return validPwd
        except Exception as err:
            print(err)

# pwd=PasswordCheck()
# pwd.pwd="abguAhj$123"
# print(pwd.checkNum())