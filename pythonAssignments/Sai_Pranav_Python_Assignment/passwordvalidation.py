

class Password:
    small, upper, digits,minlen, maxlen, specialchar=0,0,0,0,0,0
    small_letters=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    
    def check_small_letters(self,s):
        try:
            for i in s:
                
                if(i in self.small_letters):
                    self.small+=1
                else:
                    continue
                return self.small
        except Exception as err:
            print(err)

    def check_numerics(self, s):
        try:
            for i in s:
                if (i.isdigit()):
                        if(int(i)>=6 and int(i)<=9):


                            self.digits+=1 
                        else:
                            continue
                        return self.digits  
        except Exception as err:
            print(err)

    def check_cap_letters(self, s):
        try:
            for i in s:
                if (i.strip().isupper()):


                    self.upper+=1 
                else:
                    continue
                return self.upper
        except Exception as err:
            print(err)
        

    def check_min_length(self,s):
        try:
            if(len(s)>5): 

                self.minlen+=1
            
            
            
            return self.minlen
        except Exception as err:
            print(err)

    def check_max_length(self,s):
        try:
            if(len(s)<10):
                self.maxlen+=1
            return self.maxlen
        except Exception as err:
            print(err)

    def check_spl_chars(self,s):
        try:
            for i in s:
                if(i=='@'or i=='$' or i=='#' or i =='!'):
                    self.specialchar+=1
                else:
                    continue
            return self.specialchar
        except Exception as err:
            print(err)

    
        


        
                


    def passwordvalidation(self,s):
        if(self.check_cap_letters(s)>0 and  self.check_numerics(s)>0 and self.check_small_letters(s)>0 and self.check_spl_chars(s)>0 and self.check_max_length(s)>0 and self.check_min_length(s)>0):

            return s
        

       
x =Password()
print()

print(x.check_small_letters("78A2a!er"))
print(x.check_numerics("78A2a!er"))
print(x.check_cap_letters("78A2a!er"))
print(x.check_min_length("78A2a!er"))
print(x.check_spl_chars("78A2a!er"))
print(x.check_max_length("78A2a!er"))

s="78A2a!er"
for i in s:
    if(i.isupper()):
        print("ok")