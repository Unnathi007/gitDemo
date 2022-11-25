class PasswordValidation:
    def __init__(self, passwordsList):
        self.passwordsList = passwordsList
        self.lowerAlphabetsRange = list(map(chr, range(97, 123)))
        self.numberRange = list(range(0, 10))
        self.upperAlphabetsRange = list(map(chr, range(65, 91)))
        self.specialCharacters = ['$', '#', '@', '!']
        self.validPasswords = []

    def checkLowerAlphabet(self, password):
        lowerAlphabets = [
            element for element in self.lowerAlphabetsRange if element in password]
        checkLowerAlphabet = True if len(lowerAlphabets) > 0 else False
        return checkLowerAlphabet

    def checkUpperAlphabet(self, password):
        upperALphabets = [
            element for element in self.upperAlphabetsRange if element in password]
        checkUpperAlphabet = True if len(upperALphabets) > 0 else False
        return checkUpperAlphabet

    def checkNumber(self, password):
        numbers = [number for number in self.numberRange if str(
            number) in password]
        checkNumber = True if len(numbers) > 0 else False
        return checkNumber

    def checkSpecialCharacters(self, password):
        specialCharacters = [
            character for character in self.specialCharacters if character in password]
        checkSpecialCharacter = True if len(specialCharacters) > 0 else False
        return checkSpecialCharacter

    def checkLength(self, password):
        if len(password) >= 6 and len(password) <= 12:
            return True
        else:
            return False

    def validatePassword(self):
        for password in self.passwordsList:
            if self.checkLowerAlphabet(password) and self.checkUpperAlphabet(password) and self.checkNumber(password) and self.checkSpecialCharacters(password) and self.checkLength(password):
                self.validPasswords.append(password)
        return self.validPasswords


if __name__ == "__main__":
    print("Enter the passwords (seperated with comma)")
    passwordsList = list(
        map(str, input().split(",")))
    try:
        if len(passwordsList) == 1 and passwordsList[0]=='':
            raise ValueError("No Inputs given")
        passwordValidation = PasswordValidation(passwordsList)
        validPasswords = passwordValidation.validatePassword()
        print(*validPasswords, sep=",")
    except ValueError as ex:
        print(ex)
