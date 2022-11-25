"""
Write a Object oriented program to check whether the password is valid or not
Following are the criteria for checking the password:
1. At least 1 letter between [g-z]
2. At least 1 number between [6-9]
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
"""

class Validate_Passwords:
    def __init__(self, input_string):
        self.passwords = input_string.split(",")
    def validate(self):
        lst = []
        for pwd in self.passwords:
            valid = False
            lower_case = False
            upper_case = False
            number = False
            special = False
            for i in range(0,len(pwd)):
                val = ord(pwd[i:i+1])
                if(val>64 and val<91):
                    upper_case = True
                elif(val>96 and val<123):
                    lower_case = True
                elif(val>47 and val<58):
                    number = True
                elif(val==36 or val==35 or val==64 or val==33):
                    special = True
                if(lower_case==True and upper_case==True and number==True and special==True):
                    valid = True
                    break
                print(pwd[i:i+1])
                print(upper_case)
                print(lower_case)
                print(number)
                print(special)
            if(valid==True):
                lst.append(pwd)
        return lst




                

