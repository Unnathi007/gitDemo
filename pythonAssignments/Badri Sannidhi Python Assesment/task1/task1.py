class PwdValidator():
    def __init__(self,pwd=""):
        self.pwd=pwd

    def checkatoz(self):
        for ch in range(98,122):
            if self.pwd.count(chr(ch))>0:
                return True
        return False

    def checkAtoZ(self):
        for ch in range(65, 91):
            if self.pwd.count(chr(ch)) > 0:
                return True
        return False

    def check0to9(self):
        for ch in range(0,10):
            if self.pwd.count(str(ch))>0:
                return True
        return False

    def checkSplChr(self):

        return (self.pwd.count('@') > 0 or self.pwd.count('#') > 0 or self.pwd.count('$') > 0 or self.pwd.count('!') > 0 )

    def checkLen(self):
        if 6<=len(self.pwd)<=12 :
            return True
        return False

    def validatePwd(self):
        
        validation_op= self.checkgtoz() and self.checkAtoZ() and self.check6to9() and self.checkSplChr() and self.checkLen()
        return validation_op

if __name__=="__main__":
    passwords=input("Enter the passwords in a single line separated by a comma\n").split(",")
    pwd_validator= PwdValidator()
    ans=""
    for password in passwords:
        pwd_validator.pwd=password
        try:
            if(pwd_validator.validatePw()):
                if ans=="":
                    ans+=password 
                else:
                    ans+=", "+ password
        except TypeError:
            print("Format the input into required type")
        except AttributeError:
            print("Recheck the method that you are invoking")
        except Exception:
            print(Exception)
    print(ans)



