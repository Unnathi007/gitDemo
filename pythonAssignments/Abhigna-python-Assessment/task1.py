# Task 1:
# --------------
# Write a Object oriented program to check whether the password is valid or not
# Following are the criteria for checking the password:

# 1. At least 1 letter between [a-z]
# 2. At least 1 number between [0-9]
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

class PasswordCheck:
    def __init__(self,l):
        self.pwds = l
        self.res=[]
        # print(self.pwds)
    def validate(self):
        for i in self.pwds:
            if(len(i)<6 or len(i)>12):
                continue
            elif(not(('$' in i) or ('#' in i) or ('@' in i) or ('!' in i))):
                continue
            elif(i.islower() or i.isupper()):
                continue
            else:
                self.res.append(i)
        print("the valid passwords are : ")
        return self.res


if __name__ == '__main__':
    
    print("enter some passwords to validate:")
    print("enter * to terminate ")
    inputlist=[]
    pwd="!"
    while(pwd!="*"):
        pwd=input("enter a password!")
        inputlist.append(pwd)
    # print(inputlist)
    pwdObj = PasswordCheck(inputlist)
    res =pwdObj.validate()
    for i in res :
        print(i)

        
