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

import re


class ListEmptyExpection(Exception):
    pass


class PasswordValidation():
    def __init__(self, list_of_passwords):
        try:
            if (list_of_passwords == ''):
                raise ListEmptyExpection("List of passwords cannot be empty")

        except ListEmptyExpection as error:
            print(error)
            exit()
        else:
            self.list_of_passwords = list_of_passwords.split(",")
            self.list_of_validated_passwords=[]
        pass

    def check_password(self, password):

        if re.search("[a-z]", password) == None:
            return -1

        if re.search("[0-9]", password) == None:
            return -1
        if re.search("[A-Z]", password) == None:

            return -1
        if re.search("[$#@!]", password) == None:

            return -1
        if not len(password) >= 6 and len(password) <= 12:
            return -1
        else:
            return password

    def get_list_of_valid_passwords(self):

        for password in self.list_of_passwords:

            x = self.check_password(password)
            if x != -1:
                self.list_of_validated_passwords.append(x)
        self.display()
        return self.list_of_validated_passwords

    def display(self):
        print("------ List of valid passwords -------------")

        print(",".join(self.list_of_validated_passwords))


if __name__ == "__main__":
    str_of_passwords = input("Enter the csv of passwords")
    obj = PasswordValidation(str_of_passwords)

    obj.get_list_of_valid_passwords()

        
