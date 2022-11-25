class NotProperPassWordError(Exception):
    pass
class ValidPassWord:
    def password_check(self, passwd):
        try:
            SpecialSym = ['$', '@', '#', '!']
            val = True

            if len(passwd) < 5:
                val = False

            if len(passwd) > 20:
                val = False

            if not any(char.isdigit() for char in passwd):
                value = False

            if not any(char.isupper() for char in passwd):
                val = False

            if not any(char.islower() for char in passwd):
                val = False

            if not any(char in SpecialSym for char in passwd):
                val = False
            if val:
                return val
            else:
                raise NotProperPassWordError("please enter proper password")
        except NotProperPassWordError as err:
            print(err)


obj1 = ValidPassWord()
passwords = list(input().split(","))
for password in passwords:
    if (obj1.password_check(password)):
        print(password)
