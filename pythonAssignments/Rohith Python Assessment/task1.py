class TestPassword:
    def __init__(self,pwd):
        self.pwd = pwd

    def isBetweenaz(self):
        for ch in self.pwd:
            if ord(ch)>=97 and ord(ch)<=122:
                return True
        return False
    
    def isNumberBetween09(self):
        for ch in self.pwd:
            if ch.isnumeric():
                return True
        return False
    
    def isBetweenAZ(self):
        for ch in self.pwd:
            if ord(ch)>=65 and ord(ch)<=90:
                return True
        return False
    
    def isCharater(self):
        for ch in self.pwd:
            if ch == '$' or ch == '#' or ch == '@' or ch == '!':
                return True
        return False

    def isMinLength(self):
        if len(self.pwd) >= 6:
            return True
        return False
    
    def isMaxLength(self):
        if(len(self.pwd) <= 12):
            return True
        return False

if __name__ == '__main__':
    try:
        inputValue = input('Enter passwords with comma separated : \n')
        pwdList = list(inputValue.split(','))
        resultList = []
        for pwd in pwdList:
            testPassword = TestPassword(pwd)
            if testPassword.isBetweenAZ() and testPassword.isBetweenaz() and testPassword.isNumberBetween09() and testPassword.isCharater() and testPassword.isMinLength() and testPassword.isMaxLength():
                resultList.append(pwd)
        print(','.join(resultList))
    except Exception as Ex:
        print("Error Found!",Ex)


