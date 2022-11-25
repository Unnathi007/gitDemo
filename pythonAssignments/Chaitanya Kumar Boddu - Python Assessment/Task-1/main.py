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

import criteria_validations as cv
class Password:
    def __init__(self,passwords):
        self.passwords  = passwords
        
    def print_correct_passwords(self):
        passwords = self.passwords
        list_of_passwords = []
        list_of_passwords = passwords.split(",")
        list_of_correct_passwords = []
        
        for password in list_of_passwords:
            if (cv.check_small_letters(password) and cv.check_numerics(password) and cv.check_cap_letters(password) and cv.check_spl_chars(password) and cv.check_min_length(password) and cv.check_max_length(password)):
                list_of_correct_passwords.append(password)
        print(*list_of_correct_passwords,sep=",")
                
            
if __name__ == "__main__":
    try:
        get_list = input("Enter all the passwords seperated by comma to check: ")
        password_list = Password(get_list)
        password_list.print_correct_passwords()
        
    except Exception as err:
        print("Please check following error occurred:" ,err)
    
        
