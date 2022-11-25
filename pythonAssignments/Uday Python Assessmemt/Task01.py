class Password:
    def __init__(self,password):
        self.password=password

    def __lower(self):
        lower=any(c.islower() for c in self.password)
        return lower

    def __upper(self):
        upper=any(c.isupper()for c in self.password)
        return upper
    
    def __digit(self):
        upper=any(c.isdigit()for c in self.password)
        return upper

    #def __specchar(self):
        char=any(c.isspecchar("$#@!")for c in self.password)
        if '$' in self.password  or '#' in self.password  or '!' in self.password:
            return True


    

    def validate(self):
        lower=self.__lower()
        upper=self.__upper()
        digit=self.__digit()
        #specchar=self.__specchar()
        length=len(self.password)
        output= lower and upper and digit and length>6 and length<12

        if output:
            print("Valid password")
            return True
        #elif not specchar:
            print("Use atleast one special character")

        elif not lower:
            print("No lowercase letter used")
            return False

        elif not upper:
            print("No upper case letter used")
            return False

        elif length<6:
            print("Passowrd must have 6 characters")
            return False
        
        elif length>12:
            print("Passowrd max length is 12 characters")
            return False

        elif not digit:
            print("Please use atleast one number")
            return False
        else:
             print("Pass")

c=Password("Ud19@34234")
print(c.validate())

