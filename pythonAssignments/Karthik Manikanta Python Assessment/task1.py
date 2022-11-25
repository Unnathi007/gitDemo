class PasswordValidation:
    def __init__(self,pswd):
        self.pswd=pswd
    def validations(self):
        try:
            l,u,d,s=0,0,0,0
            calpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            salpha="abcdefghijklmnopqrstuvwxyz"
            schar="$#@!"
            digits="0123456789"
            if (len(self.pswd)>=6 and len(self.pswd)<=12):
                for i in self.pswd:
                    if (i in salpha):
                        l+=1
                    if (i in calpha):
                        u+=1
                    if (i in digits):
                        d+=1
                    if(i in schar):
                        s+=1
            if(l>0 and u>0 and d>0 and s>0 and l+u+d+s==len(self.pswd)):
                return True
            else:
                return False
        except Exception as err:
            print(err)

if __name__=='__main__':
    pswdstr=input("Enter passwords: ")
    pswdlist=pswdstr.split(",")
    for i in pswdlist:
        pswdobj=PasswordValidation(i)
        if pswdobj.validations():
            print(i)
