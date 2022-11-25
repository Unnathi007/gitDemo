class Null_Input_Error(Exception):
    pass

class Validate:
    def __init__(self,pwd):
        self.pwd=pwd
    def validate_password(self): 
        lower_alpha = self.check_lower_alphabet()
        upper_alpha = self.check_upper_alphabet()
        digit = self.check_digit()
        special_char = self.check_special_character()
        length = self.check_length()
        if(lower_alpha and upper_alpha and digit and special_char and length):
            print(self.pwd)

   
    def check_lower_alphabet(self):
        res = any(char.islower() for char in self.pwd)
        return res

    def check_upper_alphabet(self):
        res = any(char.isupper() for char in self.pwd)
        return res
    
    def check_digit(self):
        res = any(char.isdigit() for char in self.pwd)
        return res
    
    def check_special_character(self):
        special_chars = ['@','#','$']
        flag_sc=False
        for char in self.pwd:
            if char in special_chars:
                flag_sc=True
                break
        return flag_sc
    
    def check_length(self):
        if len(self.pwd)>=6 and len(self.pwd)<=12:
            return True
        else:
            return False

if __name__ == '__main__':
    print("Enter passwords")
    try:
        pwd_list = list(map(str,input().split(",")))
        if(len(pwd_list)==1 and pwd_list[0]==""):
            raise Null_Input_Error
    except Null_Input_Error:
        print("null input")

    else:
        for i in pwd_list:
            validate = Validate(i)
            validate.validate_password()



                
