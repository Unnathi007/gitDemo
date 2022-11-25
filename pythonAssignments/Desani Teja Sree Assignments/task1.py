class Error(Exception):
    pass
class EmptyListException(Error):
    pass

class Password:

    def __init__(self,pwdlist):
        self.pwdlist = pwdlist
    
    def checkPasword(self):
        validPwd = []

        for pwd in self.pwdlist:
            lower = 0
            upper = 0
            num = 0
            special = 0

            for x in pwd:
                if x >= 'a' and x <= 'z':
                    lower=1
                if x >= 'A' and x <= 'Z':
                    upper=1
                if x >= '0' and x <= '9':
                    num = 1
                if x in ('$', '#', '@', '!'):
                    special = 1
            
            if len(pwd) >= 6 and len(pwd) <=12 and lower and upper and num and special:
                validPwd.append(pwd)
        try:
            if(len(validPwd)==0):
                raise EmptyListException
            else:
                print(*validPwd,sep=',')
                return validPwd
                
        except EmptyListException():
            print("The List is Empty!...")

        except Exception as Err:
            print("Empty List Exception...")

        return validPwd
        
        

if __name__=='__main__':

    pwdlist = input("Enter the list of Passwords: ").split(',')
    password = Password(pwdlist)
    password.checkPasword()
