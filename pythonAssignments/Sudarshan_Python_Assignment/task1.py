a=list(input().split(','))
acceptedPasswords=[]

def containsaz(word):
   for i in word:
      if 97<=ord(i)<=122:
         return True
   return False

def contains09(word):
   for i in word:
      if 48<=ord(i)<=57:
         return True
   return False

def containsAZ(word):
   for i in word:
      if 65<=ord(i)<=90:
         return True
   return False

def containsSym(word):
   for i in word:
      if i=='$' or i=='#' or i == '!' or i =='@':
         return True
   return False


for word in a:
   flag=1
   if not containsaz(word):
      flag=-1
   if not contains09(word):
      flag=-1
   if not containsAZ(word):
      flag =-1
   if not containsSym(word):
      flag=-1
   if not (6<=len(word)<=12):
      flag=-1

   print("------\n")
   if flag!=-1:
      acceptedPasswords.append(word)

print(",".join(i for i in acceptedPasswords))

      
