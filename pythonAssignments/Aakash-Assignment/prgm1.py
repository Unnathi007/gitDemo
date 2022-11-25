import re
class EmptyException(Exception):
    pass
class Password:
    def __init__(self,password):
        self.password = password
    
    def validate(self): 
        try:
            if(len(self.password)==0 or self.password[0]==' '):
                raise EmptyException
            if (len(self.password)<6 or len(self.password)>12):
                return False
            elif not re.search("[a-z]",self.password):
                return False
            elif not re.search("[0-9]",self.password):
                return False
            elif not re.search("[A-Z]",self.password):
                return False
            elif not re.search("[$#@!]",self.password):
                return False
            return True
        except EmptyException as e:
            print("Password cannot be empty space",e)


if __name__ == '__main__':
    print("Enter password")
    passwd = input()
    passwords = passwd.split(',')
    passwdObj = Password(passwd)
    rightPassword = []
    for i in passwords:
        passwdObj = Password(i)
        isValidate = passwdObj.validate()
        if(isValidate):
            rightPassword.append(i)

    print(rightPassword)