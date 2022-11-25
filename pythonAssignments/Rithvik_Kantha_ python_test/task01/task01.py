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
            self.list_of_validated_passwords = []

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
