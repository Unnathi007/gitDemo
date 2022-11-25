class PasswordChecker:

    def __init__(self, password):
        self.password = password
    
    def isUppercaseAlphabet(self, char):
        if ord(char) > 64 and ord(char) < 91:
            return True
        return False 
    
    def isLowercaseAlphabet(self, char):
        if ord(char) > 96 and ord(char) < 123:
            return True
        return False
    
    def isDigit(self, char):
        if char.isdigit():
            return True
        return False
    
    def isRelevantSymbol(self, char):
        if char in {'!', '@', '#', '$'}:
            return True
        return False
    
    def isLongEnough(self):
        if len(self.password) >= 6 and len(self.password) <= 12:
            return True
        return False
    
    def isValidPassword(self, validationStatus):
        stats = list(validationStatus.values())
        verdict = True
        for status in stats:
            verdict = verdict and status
        return verdict

    def checkPassword(self):
        validationStatus = {
        'containsLowercaseAlphabet' : False,
        'containsUppercaseAlphabet' : False,
        'containsDigit' : False,
        'containsRelevantSymbol' : False
        }

        if self.isLongEnough():
            for char in self.password:
                if self.isUppercaseAlphabet(char) or self.isLowercaseAlphabet(char):
                    if self.isUppercaseAlphabet(char):
                        validationStatus['containsUppercaseAlphabet'] = True
                    else:
                        validationStatus['containsLowercaseAlphabet'] = True
                else:
                    if self.isDigit(char):
                        validationStatus['containsDigit'] = True
                    elif self.isRelevantSymbol(char):
                        validationStatus['containsRelevantSymbol'] = True
                    else:
                        return False
            if self.isValidPassword(validationStatus):
                return True
            return False
        return False

if __name__ == '__main__':
    
    try:
        passwordsList = input('Enter the list of passwords seperated by a comma :- \n').strip().split(',')
        validPasswords = []
        for passwd in passwordsList:
            password = PasswordChecker(passwd)
            if password.checkPassword():
                validPasswords.append(passwd)
        print('Valid Passwords from the list of the passwords provided are :- \n')
        print(','.join(validPasswords))

    except Exception as ex:
        print(ex)

