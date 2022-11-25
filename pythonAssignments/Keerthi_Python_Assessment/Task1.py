class Password:
    def __init__(self,password):
        self.password=password
    def checkLength(self):
        if(len(self.password)>=6 and len(self.password)<=12):
            return True
        return False
        
    def checkUpper(self):
        for i in self.password:
            if(i.isupper()):
                return True
        return False
    def checkLower(self):
        for i in self.password:
            if(i.islower()):
                return True
        return False
    def checkNum(self):
        for i in self.password:
            if(i.isnumeric()):
                return True
        return False
    def specialChar(self):
        for i in self.password:
            if(i in ["#","$","!","@"]):
                return True
        return False
if __name__=="__main__":
    try:
        l=["ABd1234@1","aF1#","2w3E*","2We3345"]  
        res=[]  
        for i in l:
            ob=Password(i) 
            if ob.checkLength() and ob.checkLower() and ob.checkNum() and ob.checkUpper() and ob.specialChar():
                res.append(i)
        print(",".join(res))
    except Exception as err:
        print(err)
        


