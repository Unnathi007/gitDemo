import regex as re


class CheckPassword:
    def __init__(self, pass_list) -> None:
        self.pass_list = pass_list

    def check_validity(self):
        for i in self.pass_list:
            try:
                if len(i) >= 6 and len(i) <= 12:
                    if i.__contains__('#') or i.__contains__('$') or i.__contains__('@') or i.__contains__('!'):
                        if re.search('[0-9a-zA-Z]', i):
                            return i
            except Exception as er:
                print("No elements found in list")


# li = (input("Enter Passwords separated by comma: "))
# cp = CheckPassword(li.split(","))
# print(cp.check_validity())

# ABd1234@1,a F1#,2w3E*,2We3345
