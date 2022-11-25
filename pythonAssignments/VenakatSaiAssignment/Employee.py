class Employee:
    def __init__(self, id, name, age, salary):
        self.id = id
        self.name = name
        self.age = age
        self.salary = salary

    def add_to_file(self):
        with open('Employees.txt', 'a') as emps:
            emps.write("{},{},{},{}\n".format(
                self.id, self.name, self.age, self.salary))
