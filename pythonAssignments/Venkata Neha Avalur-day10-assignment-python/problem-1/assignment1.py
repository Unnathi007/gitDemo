'''
Write a Object oriented program to check whether the password is valid or not
Following are the criteria for checking the password:
1. At least 1 letter between [a-z]
2. At least 1 number between [0-9]
3. At least 1 letter between [A-Z]
4. At least 1 character from $ or # or @ or !
5. Minimum length of password: 6
6. Maximum length of password: 12

Your program should accept a sequence of comma separated passwords and will check them according to the above criteria. 

Example:
If the following passwords are given as input to the program:
ABd1234@1,a F1#,2w3E*,2We3345
Then, the output of the program should be:
ABd1234@1

Passwords that match the criteria are to be printed, each separated by a comma.

- ensure that the code is implemented with proper exception handling.
- validations wherever it is required
- write the test case for each of the criteria mentioned above.
- create a test suite with all the test cases and create the final html report
'''
import regex

class Isvalid:
    def __init__(self,arg):
        self.arg=arg
        self.valid=[]

    def checkvalue(self):
        # print(*args)
        reg = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z0-9\d@$!#]{6,12}$"
        pattern=regex.compile(reg)
        for item in self.arg:
            # print(item)
            try:
                match=regex.search(pattern,item)
                if match:
                    self.valid.append(item)
            except TypeError as msg:
                print("Check the input given : ", msg)
            else:   
                print("Password Validation done")
                return True
    
    def printValues(self):
        result = ', '.join(str(item) for item in self.valid)
        print(result)

if __name__=='__main__':
    passwords=list(map(str,input().split(",")))
    # print(passwords)
    ob=Isvalid(passwords)
    ob.checkvalue()
    ob.printValues()
    
#TypeError: expected string or buffer