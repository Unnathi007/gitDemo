import re

passReqSmall = "abcdeghijklmnopqrstuvwxyz"
passReqCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
passReqSpe = "$#@!"
passReqNum = "0123456789"

class InvaildPassword(Exception):
     pass

class Password:
     def __init__(self, password) -> None:
          self.password = password
     def passVerification(self):
          if len(self.password) >= 6 and len(self.password) <= 12:
               cond1 = [i in passReqSmall for i in self.password]
               cond2 = [i in passReqCap for i in self.password]
               cond3 = [i in passReqSpe for i in self.password]
               cond4 = [i in passReqNum for i in self.password]
               if True in cond1 and True in cond2 and True in cond3 and True in cond4:
                    print("Successfully created password")
                    return True
               else:
                    raise InvaildPassword("Password is must contain\nAt least 1 small letter\nAt least 1 capital letter\nAt least 1 number\nMust contain # | $ | @ | !\n")

     def passVerificationRegex(self):
          x = re.compile("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!#])[A-Zg-z0-9@$!#]{6,12}$")
          if re.search(x, self.password):
               print("Successfully created password")
               return True
          else:
               raise InvaildPassword("Password is must contain\nAt least 1 small letter\nAt least 1 capital letter\nAt least 1 number\nMust contain # | $ | @ | !\n")

if __name__ == "__main__":
     password = Password(input())
     password.passVerification()
